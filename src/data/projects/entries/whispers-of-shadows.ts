// src/data/projects/entries/whispers-of-shadows.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2024-25/diseno-visual-y-arte-final/whispers-of-shadows';

export const whispersOfShadows: ProjectInput = {
    slug: 'whispers-of-shadows',
    year: 2024,
    academicYear: '2024-25',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'The Whispers of Shadows',
    description: 'Tráiler cinematográfico de un videojuego ya existente, realizado en grupo para Diseño Visual y Arte Final. Me encargué del castillo, del antagonista, de las cinemáticas y del montaje del vídeo, sobre todo con 3ds Max.',
    challenges: 'Mantener la coherencia visual entre los distintos elementos y conseguir una calidad suficiente en las cinemáticas.',
    solution: 'Modelé el castillo y el antagonista en 3ds Max, con algo de Blender y Photoshop, preparé las cinemáticas y monté el tráiler. El videojuego en sí no es obra mía.',
    highlights: [
      localizedText('🏰 Castillo modelado en 3D', '🏰 3D-modeled castle'),
      localizedText('🧙 Diseño y modelado del antagonista', '🧙 Antagonist design and modeling'),
      localizedText('🎬 Cinemáticas y montaje del tráiler', '🎬 Cinematics and trailer editing'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Trabajo grupal de la asignatura Diseño Visual y Arte Final (2024-25): un tráiler cinematográfico para un videojuego que ya existía, con arte adicional creado para la ocasión.',
          'Group work for the Visual Design and Final Art course (2024-25): a cinematic trailer for a game that already existed, with additional art created for the occasion.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Presentar el juego con un tráiler de aspecto cinematográfico, con un castillo y un antagonista propios y una estética coherente entre todas las piezas.',
          'Present the game with a cinematic-looking trailer, with a custom castle and antagonist and a consistent look across all pieces.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Modelé el castillo y el antagonista, preparé las cinemáticas y monté el vídeo. Trabajé sobre todo con 3ds Max, con algo de Blender y Photoshop.',
          'I modeled the castle and the antagonist, prepared the cinematics and edited the video. I worked mainly in 3ds Max, with some Blender and Photoshop.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Lo más exigente fue mantener la coherencia visual entre piezas y la calidad de las cinemáticas.',
          'The most demanding aspects were keeping the pieces visually consistent and the quality of the cinematics.'
        ),
      },
    ],
    skillGains: [
      localizedText('Modelado 3D en 3ds Max', '3D modeling in 3ds Max'),
      localizedText('Creación de cinemáticas', 'Cinematic creation'),
      localizedText('Montaje de vídeo', 'Video editing'),
    ],
    tags: ['Modelado 3D', '3ds Max', 'Cinemática', 'Blender'],
    subjects: ['Diseño Visual y Arte Final'],
    disciplines: ['modelado-3d', 'ilustracion'],
    technologies: [
      { name: '3ds Max', level: 'principal' },
      { name: 'Blender', level: 'secundaria' },
      { name: 'Photoshop', level: 'secundaria' },
    ],
    featured: false,
    status: 'completado',
    coverImage: `${BASE}/whispersofshadows_portada.jpg`,
    gallery: [
      { type: 'image', src: `${BASE}/r1.jpg`, alt: 'Render del castillo oscuro con torres altas sobre un fondo rojo oscuro' },
      { type: 'image', src: `${BASE}/r3.jpg`, alt: 'Detalle en perspectiva del castillo y de sus murallas, con antorchas encendidas' },
      { type: 'image', src: `${BASE}/r2.jpg`, alt: 'Plaza interior del castillo con puestos de mercado y una fuente' },
      { type: 'image', src: `${BASE}/whispersofshadows5.webp`, alt: 'Personaje de estilo chibi delante de la entrada del castillo' },
      { type: 'image', src: `${BASE}/whispersofshadows6.webp`, alt: 'Personaje pequeño junto a unos puestos de mercado dentro de las murallas' },
      { type: 'image', src: `${BASE}/whispersofshadows4.webp`, alt: 'Personaje de estilo chibi en la plaza del castillo entre puestos y torres' },
      { type: 'image', src: `${BASE}/whispersofshadows1.webp`, alt: 'Modelo 3D del personaje de estilo chibi visto de frente' },
      { type: 'image', src: `${BASE}/whispersofshadows2.webp`, alt: 'Modelo 3D del personaje visto de perfil' },
      { type: 'image', src: `${BASE}/whispersofshadows3.webp`, alt: 'Modelo 3D del personaje visto de espaldas, con un emblema en la camiseta' },
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    role: 'Artista 3D (castillo, antagonista, cinemáticas y montaje)',
    team: 'Proyecto académico grupal - 4 personas',
    duration: '2 meses',
    learnings: 'Lo más exigente fue mantener la coherencia visual entre piezas y la calidad de las cinemáticas.',
  };
