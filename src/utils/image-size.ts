import sizes from '../data/image-sizes.json';

const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

// Dimensiones intrínsecas (de scripts/optimize-images.mjs) para width/height en <img> y evitar saltos de layout.
export function imageSize(src?: string): { width?: number; height?: number } {
  if (!src) return {};
  let path = src.normalize('NFC');
  if (base && path.startsWith(`${base}/`)) path = path.slice(base.length);
  const size = (sizes as Record<string, number[]>)[path];
  return size ? { width: size[0], height: size[1] } : {};
}
