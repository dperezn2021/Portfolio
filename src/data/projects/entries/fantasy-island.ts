// src/data/projects/entries/fantasy-island.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2021-22/diseno-3d/fantasy-island';

export const fantasyIsland: ProjectInput = {
    slug: 'fantasy-island',
    year: 2023,
    academicYear: '2021-22',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Fantasy Island',
    description: 'Isla flotante fantástica para un videojuego, con montañas, un riachuelo con cascadas laterales, una torre, un poblado abandonado y un castillo. Proyecto individual: bocetos en Photoshop, modelado en SketchUp, ensamblaje y texturizado en 3ds Max y renders finales.',
    challenges: 'Mantener una escala consistente entre elementos muy distintos (terreno, torre, poblado y castillo) en un trabajo que exigió muchas horas.',
    solution: 'Partí de bocetos en Photoshop, modelé cada elemento en SketchUp y los exporté a 3ds Max para ensamblar la escena, texturizar con imágenes propias o de internet, iluminar y renderizar.',
    highlights: [
      localizedText('🏝️ Isla flotante con montañas, cascadas, torre, poblado y castillo', '🏝️ Floating island with mountains, waterfalls, tower, village and castle'),
      localizedText('📐 Modelado en SketchUp y ensamblaje en 3ds Max', '📐 SketchUp modeling and 3ds Max assembly'),
      localizedText('🎨 Texturizado de toda la escena', '🎨 Texturing of the whole scene'),
      localizedText('📷 Renders desde ocho cámaras', '📷 Renders from eight cameras'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Primer proyecto de la asignatura Diseño 3D, en primer curso. El encargo era diseñar y modelar un posible escenario de videojuego.',
          'First project of the 3D Design course, in the first year. The brief was to design and model a possible video game environment.'
        ),
      },
      {
        kind: 'objective',
        icon: 'target',
        text: localizedText(
          'Construir una isla flotante fantástica completa, con montañas, un riachuelo con cascadas laterales, una torre, un poblado abandonado y un castillo, y presentarla con renders finales.',
          'Build a complete fantasy floating island with mountains, a stream with side waterfalls, a tower, an abandoned village and a castle, and present it with final renders.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Hice bocetos en Photoshop, modelé los elementos en SketchUp y los exporté a 3ds Max, donde monté la escena completa, apliqué las texturas, configuré la iluminación y generé los renders.',
          'I made sketches in Photoshop, modeled the elements in SketchUp and exported them to 3ds Max, where I assembled the full scene, applied textures, set up lighting and produced the renders.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'La mayor dificultad fue mantener una escala consistente entre todos los elementos de la isla. El proyecto fue largo y requirió muchas horas de trabajo.',
          'The main difficulty was keeping a consistent scale across all the elements of the island. The project was long and took many hours of work.'
        ),
      },
    ],
    skillGains: [
      localizedText('Modelado 3D en SketchUp', 'SketchUp 3D modeling'),
      localizedText('Ensamblaje y texturizado en 3ds Max', 'Scene assembly and texturing in 3ds Max'),
      localizedText('Iluminación y renderizado de escenas', 'Scene lighting and rendering'),
      localizedText('Bocetos de escenarios en Photoshop', 'Environment sketching in Photoshop'),
    ],
    tags: ['Modelado 3D', 'Exportación', 'Texturización'],
    subjects: ['Diseño 3D'],
    disciplines: ['modelado-3d'],
    technologies: [
      { name: 'SketchUp', level: 'principal' },
      { name: '3ds Max', level: 'principal' },
      { name: 'Photoshop', level: 'secundaria' },
    ],
    featured: false,
    status: 'completado',
    coverImage: `${BASE}/fantasyisland_portada.png`,
    gallery: [
      { type: 'image', src: `${BASE}/fantasyisland1.png`, alt: 'Escenario de Fantasy Island, imagen 1' },
      { type: 'image', src: `${BASE}/fantasyisland2.png`, alt: 'Escenario de Fantasy Island, imagen 2' },
      { type: 'image', src: `${BASE}/fantasyisland3.png`, alt: 'Escenario de Fantasy Island, imagen 3' },
      { type: 'image', src: `${BASE}/fantasyisland4.png`, alt: 'Escenario de Fantasy Island, imagen 4' },
      { type: 'image', src: `${BASE}/fantasyisland5.png`, alt: 'Escenario de Fantasy Island, imagen 5' },
      { type: 'image', src: `${BASE}/fantasyisland6.png`, alt: 'Escenario de Fantasy Island, imagen 6' },
      { type: 'image', src: `${BASE}/fantasyisland7.png`, alt: 'Escenario de Fantasy Island, imagen 7' },
      { type: 'image', src: `${BASE}/fantasyisland8.png`, alt: 'Escenario de Fantasy Island, imagen 8' },
    ],
    galleryConfig: { columns: 2, gap: 'small', layout: 'masonry' },
    resources: [
      { type: 'pdf', url: `${BASE}/fantasyislanddiseno3d.pdf`, title: 'Memoria PDF' },
    ],
    role: 'Artista 3D, Modelador y Texturizador',
    team: 'Proyecto académico personal - Individual',
    duration: '4 meses',
    learnings: 'Mantener una escala consistente entre todos los elementos de una escena grande fue lo más difícil. El proyecto me exigió muchas horas de modelado, ensamblaje y texturizado.',
  };
