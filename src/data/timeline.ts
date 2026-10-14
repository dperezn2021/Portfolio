// Hitos de la cronología de Trayectoria. Textos: about.timeline.{period,title,desc}<n> en translations.ts
export interface TimelineItem {
  n: number;
  kind: 'education' | 'experience';
  issuer: string;
}

export const timeline: TimelineItem[] = [
  { n: 1, kind: 'education', issuer: 'UNIR · Universidad Internacional de La Rioja' },
  { n: 2, kind: 'experience', issuer: 'EPAM Systems · Atresmedia' },
  { n: 3, kind: 'education', issuer: 'Universidad Rey Juan Carlos · Móstoles' },
];
