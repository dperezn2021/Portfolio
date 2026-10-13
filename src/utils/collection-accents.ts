// Degradados del fondo neutro de las tarjetas de colección (clases completas
// para que Tailwind las detecte).
import type { CollectionAccent } from '../data/collections/types';

export const ACCENT_GRADIENTS: Record<CollectionAccent, string> = {
  cyan: 'from-cyan-500 to-sky-700',
  amber: 'from-amber-500 to-orange-700',
  emerald: 'from-emerald-500 to-teal-700',
  rose: 'from-rose-500 to-pink-700',
  violet: 'from-violet-500 to-purple-700',
  sky: 'from-sky-500 to-blue-700',
  orange: 'from-orange-500 to-red-700',
};
