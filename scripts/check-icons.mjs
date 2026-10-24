// Comprueba que todos los iconos Material Symbols del sitio construido están en src/data/icons.ts.
// Uso: npm run build && npm run check:icons
import { promises as fs } from 'node:fs';
import path from 'node:path';

const listSource = await fs.readFile('src/data/icons.ts', 'utf8');
const allowed = new Set([...listSource.split('export const MATERIAL_SYMBOLS_URL')[0].matchAll(/'([a-z0-9_]+)'/g)].map((match) => match[1]));

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (full.endsWith('.html')) out.push(full);
  }
  return out;
}

// Los que se escriben desde JavaScript no aparecen en el HTML estático.
const used = new Map([['menu', 'JS'], ['close', 'JS'], ['tune', 'JS'], ['light_mode', 'JS'], ['dark_mode', 'JS']]);
for (const file of await walk('dist')) {
  const html = await fs.readFile(file, 'utf8');
  for (const match of html.matchAll(/class="[^"]*material-symbols-outlined[^"]*"[^>]*>\s*([a-z0-9_]+)\s*</g)) {
    if (!used.has(match[1])) used.set(match[1], path.relative('dist', file));
  }
}

const missing = [...used].filter(([name]) => !allowed.has(name));
if (missing.length) {
  console.error('Faltan iconos en src/data/icons.ts:');
  missing.forEach(([name, where]) => console.error(`  - ${name} (${where})`));
  process.exit(1);
}
console.log(`Iconos OK (${used.size} usados, ${allowed.size} permitidos).`);
