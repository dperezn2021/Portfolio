// Optimiza las imágenes de public/images/projects y regenera src/data/image-sizes.json.
// Uso: node scripts/optimize-images.mjs [--dry]
//  - PNG  -> WebP (o JPG si es una portada sin transparencia, para que LinkedIn/WhatsApp la lean bien en og:image)
//  - JPG de más de 300 KB -> se recomprimen (mismo nombre)
//  - Los originales se mueven a Contenido_Porfolio/originales-imagenes (no se versiona)
//  - Escribe src/data/image-sizes.json (ancho/alto) para poner width/height en los <img>
// Es idempotente: si no queda ningún PNG, solo regenera el manifiesto.
import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, 'public');
const PROJECTS = path.join(PUBLIC, 'images', 'projects');
const BACKUP = path.join(ROOT, 'Contenido_Porfolio', 'originales-imagenes');
const MANIFEST = path.join(ROOT, 'src', 'data', 'image-sizes.json');
const DATA_DIR = path.join(ROOT, 'src', 'data');
const DRY = process.argv.includes('--dry');

const MAX_SIDE = 2800;
const MAX_COVER_SIDE = 2000;
const JPG_MIN_BYTES = 300_000;
const SMALL_SIDE = 1200; // por debajo se usa WebP sin pérdida (pixel art, sprites)

const nfc = (s) => s.normalize('NFC');

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function coverStems() {
  const stems = new Set();
  const files = (await walk(DATA_DIR)).filter((f) => f.endsWith('.ts'));
  for (const file of files) {
    for (const line of (await fs.readFile(file, 'utf8')).split('\n')) {
      if (!/\bcover(Image)?\s*:/.test(line)) continue;
      const match = line.match(/([^/'"`]+)\.(png|jpe?g)['"`]/i);
      if (match) stems.add(nfc(match[1]));
    }
  }
  return stems;
}

async function backupOriginal(file) {
  const target = path.join(BACKUP, path.relative(PUBLIC, file));
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.rename(file, target);
}

async function hasTransparency(image, meta) {
  if (!meta.hasAlpha) return false;
  const { channels } = await image.stats();
  return channels[channels.length - 1].min < 255;
}

async function convertPng(file, covers) {
  const stem = path.basename(file, path.extname(file));
  const image = sharp(file);
  const meta = await image.metadata();
  const isCover = covers.has(nfc(stem));
  const asJpg = isCover && !(await hasTransparency(image, meta));
  const maxSide = isCover ? MAX_COVER_SIDE : MAX_SIDE;
  const pipeline = sharp(file).resize({ width: maxSide, height: maxSide, fit: 'inside', withoutEnlargement: true });
  const small = Math.max(meta.width, meta.height) <= SMALL_SIDE;
  const outFile = path.join(path.dirname(file), `${stem}.${asJpg ? 'jpg' : 'webp'}`);
  const buffer = asJpg
    ? await pipeline.jpeg({ quality: 94, mozjpeg: true, chromaSubsampling: '4:4:4' }).toBuffer()
    : await pipeline.webp(small ? { lossless: true } : { quality: 92, alphaQuality: 95, effort: 5, smartSubsample: true }).toBuffer();
  return { outFile, buffer, before: (await fs.stat(file)).size };
}

async function recompressJpg(file) {
  const before = (await fs.stat(file)).size;
  if (before < JPG_MIN_BYTES) return null;
  const buffer = await sharp(file)
    .rotate()
    .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
  return buffer.length < before * 0.9 ? { outFile: file, buffer, before } : null;
}

async function main() {
  const covers = await coverStems();
  const files = await walk(PROJECTS);
  const seenStems = new Map();
  let before = 0;
  let after = 0;
  let converted = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const result = ext === '.png' ? await convertPng(file, covers) : await recompressJpg(file);
    if (!result) continue;

    const stemKey = nfc(path.basename(result.outFile, path.extname(result.outFile)));
    const newExt = path.extname(result.outFile);
    if (seenStems.has(stemKey) && seenStems.get(stemKey) !== newExt) {
      throw new Error(`Nombre repetido con extensiones distintas: ${stemKey}`);
    }
    seenStems.set(stemKey, newExt);

    before += result.before;
    after += result.buffer.length;
    converted += 1;
    console.log(`${path.relative(PUBLIC, file)} -> ${path.basename(result.outFile)} (${(result.before / 1024) | 0} KB -> ${(result.buffer.length / 1024) | 0} KB)`);

    if (DRY) continue;
    await backupOriginal(file);
    await fs.writeFile(result.outFile, result.buffer);
  }

  console.log(`\n${converted} imágenes, ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB${DRY ? ' (simulación)' : ''}`);
  if (DRY) return;

  const sizes = {};
  for (const file of (await walk(path.join(PUBLIC, 'images'))).sort()) {
    if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;
    const { width, height } = await sharp(file).metadata();
    sizes[nfc('/' + path.relative(PUBLIC, file).split(path.sep).join('/'))] = [width, height];
  }
  await fs.writeFile(MANIFEST, JSON.stringify(sizes, null, 1) + '\n');
  console.log(`Manifiesto: ${Object.keys(sizes).length} imágenes -> ${path.relative(ROOT, MANIFEST)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
