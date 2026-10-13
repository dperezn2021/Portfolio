// src/data/projects/entries/willy-fog.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2021-22/diseno-digital-2d/willy-fog';

export const willyFog: ProjectInput = {
  slug: 'willy-fog',
  year: 2022,
  academicYear: '2021-22',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Willy Fog',
  description: 'Animación 2D individual de Willy Fog caminando, con un giro adicional del gorro. Fondo y personaje dibujados en Photoshop y animados por fotogramas clave en Adobe Animate.',
  challenges: 'Las manos se quedaban fijas durante el paso y las rodillas se doblaban de forma poco natural.',
  solution: 'Dibujé el personaje separado en cabeza, torso, brazos, manos, piernas, pies y gorro para poder animar cada pieza por separado con fotogramas clave.',
  highlights: [
    localizedText('🚶 Ciclo de caminar de Willy Fog', '🚶 Willy Fog walk cycle'),
    localizedText('🎩 Giro adicional del gorro', '🎩 Extra hat spin'),
    localizedText('✂️ Personaje dividido en piezas para animarlo', '✂️ Character split into pieces for animation'),
    localizedText('🖌️ Fondo y personaje dibujados por mí', '🖌️ Background and character drawn by me'),
  ],
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Trabajo individual de la asignatura Diseño Digital 2D: mi primera animación 2D.',
        'Individual work for the 2D Digital Design course: my first 2D animation.'
      ),
    },
    {
      kind: 'objective',
      icon: 'flag',
      text: localizedText(
        'Animar a Willy Fog caminando e incluir un giro adicional del gorro.',
        'Animate Willy Fog walking and add an extra hat spin.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Dibujé el fondo y el personaje en Photoshop, separé cabeza, torso, brazos, manos, piernas, pies y gorro, y los animé por fotogramas clave en Adobe Animate.',
        'I drew the background and the character in Photoshop, split the head, torso, arms, hands, legs, feet and hat, and animated them with keyframes in Adobe Animate.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'Al ser mi primera animación 2D, tuve que corregir manos que se quedaban fijas y rodillas que se doblaban mal.',
        'As it was my first 2D animation, I had to fix hands that stayed fixed and knees that bent badly.'
      ),
    },
  ],
  skillGains: [
    localizedText('Animación 2D por fotogramas clave', 'Keyframe 2D animation'),
    localizedText('Preparación de personajes por piezas', 'Preparing characters as separate pieces'),
    localizedText('Dibujo digital en Photoshop', 'Digital drawing in Photoshop'),
  ],
  tags: ['Animación 2D', 'Photoshop', 'Adobe Animate'],
  subjects: ['Diseño Digital 2D'],
  disciplines: ['animacion-2d', 'ilustracion', 'diseño-2d'],
  technologies: [
    { name: 'Adobe Animate', level: 'principal' },
    { name: 'Photoshop', level: 'principal' },
  ],
  publicable: true,
  featured: false,
  status: 'completado',
  coverImage: `${BASE}/poster.jpg`,
  featuredMedia: {
    type: 'video',
    src: `${BASE}/animacionWillyFog.mp4`,
    poster: `${BASE}/poster.jpg`,
    title: 'Animación de Willy Fog caminando',
  },
  role: 'Dibujo y animación',
  team: 'Proyecto académico personal - Individual',
};
