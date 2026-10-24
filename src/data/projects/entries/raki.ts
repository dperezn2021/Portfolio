// src/data/projects/entries/raki.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2021-22/diseno-3d/raki';

export const raki: ProjectInput = {
    slug: 'raki',
    year: 2023,
    academicYear: '2021-22',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Raki',
    description: 'Elfo guerrero con espada diseñado como personaje de videojuego e integrado en la escena de Fantasy Island. Proyecto individual: turnaround en Photoshop, modelado en 3ds Max, texturas en Substance Painter y renders.',
    challenges: 'Unir polígonos, mantener simetrías, trabajar con modificadores y evitar caras ocultas sin recurrir a arreglos improvisados.',
    solution: 'Dibujé el turnaround (vistas frontal y de perfil) para guiar el modelado en 3ds Max. Modelé armadura, guantes, cuerpo, ojos, cara, pelo y espada; después hice el unwrapping y texturicé en Substance Painter.',
    highlights: [
      localizedText('🧝 Elfo guerrero con espada, modelado completo', '🧝 Warrior elf with sword, fully modeled'),
      localizedText('🔄 Turnaround en Photoshop para guiar el modelado', '🔄 Photoshop turnaround to guide the modeling'),
      localizedText('🎨 Texturizado en Substance Painter', '🎨 Texturing in Substance Painter'),
      localizedText('🏝️ Integración en la escena de Fantasy Island', '🏝️ Integration into the Fantasy Island scene'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Segundo proyecto de la asignatura Diseño 3D. Tras modelar el escenario de Fantasy Island, el siguiente paso fue crear un personaje para esa misma escena.',
          'Second project of the 3D Design course. After modeling the Fantasy Island environment, the next step was to create a character for that same scene.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Diseñar y construir en 3D un elfo guerrero con su espada, pensado como personaje de videojuego, y colocarlo en la escena de Fantasy Island.',
          'Design and build a 3D warrior elf with his sword, conceived as a video game character, and place him in the Fantasy Island scene.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Dibujé el turnaround en Photoshop y modelé en 3ds Max la armadura, los guantes, el cuerpo, los ojos, la cara, el pelo y la espada. Hice el unwrapping, texturicé en Substance Painter, integré el personaje en la escena y generé los renders.',
          'I drew the turnaround in Photoshop and modeled the armor, gloves, body, eyes, face, hair and sword in 3ds Max. I did the unwrapping, textured in Substance Painter, integrated the character into the scene and produced the renders.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Lo más costoso fue el modelado: unir polígonos, respetar las simetrías, usar bien los modificadores y evitar caras ocultas, que me llevaron a veces a arreglos improvisados.',
          'The hardest part was the modeling: joining polygons, keeping symmetries, using modifiers properly and avoiding hidden faces, which sometimes led me to improvised fixes.'
        ),
      },
    ],
    skillGains: [
      localizedText('Modelado de personajes en 3ds Max', 'Character modeling in 3ds Max'),
      localizedText('Texturizado en Substance Painter', 'Texturing in Substance Painter'),
      localizedText('Turnaround de personajes', 'Character turnaround'),
      localizedText('Integración de un personaje en una escena', 'Integrating a character into a scene'),
    ],
    en: {
      title: 'Raki',
      description: 'A warrior elf with a sword designed as a video game character and integrated into the Fantasy Island scene. Individual project: Photoshop turnaround, 3ds Max modeling, Substance Painter textures and renders.',
      challenges: 'Joining polygons, keeping symmetries, working with modifiers and avoiding hidden faces without resorting to improvised fixes.',
      solution: 'I drew the turnaround (front and profile views) to guide the modeling in 3ds Max. I modeled the armor, gloves, body, eyes, face, hair and sword; then I did the unwrapping and textured in Substance Painter.',
      role: '3D Artist',
      team: 'Personal academic project - Individual',
      duration: '3 months',
      learnings: 'The 3ds Max modeling was the most demanding part: joining polygons, respecting symmetries, using modifiers and avoiding hidden faces. I also learned to texture a character in Substance Painter.',
    },
    tags: ['3ds Max', 'Substance Painter', 'Modelado 3D', 'Personajes'],
    subjects: ['Diseño 3D'],
    disciplines: ['modelado-3d'],
    technologies: [
      { name: '3ds Max', level: 'principal' },
      { name: 'Substance Painter', level: 'principal' },
      { name: 'Photoshop', level: 'secundaria' },
    ],
    featured: false,
    status: 'completado',
    coverImage: `${BASE}/raki_portada.jpg`,
    gallery: [
      { type: 'image', src: `${BASE}/raki1.webp`, alt: 'Raki, elfo guerrero con espada: imagen 1 del proyecto' },
      { type: 'image', src: `${BASE}/raki2.webp`, alt: 'Raki, elfo guerrero con espada: imagen 2 del proyecto' },
      { type: 'image', src: `${BASE}/raki3.webp`, alt: 'Raki, elfo guerrero con espada: imagen 3 del proyecto' },
      { type: 'image', src: `${BASE}/raki4.webp`, alt: 'Raki, elfo guerrero con espada: imagen 4 del proyecto' },
      { type: 'image', src: `${BASE}/raki5.webp`, alt: 'Raki, elfo guerrero con espada: imagen 5 del proyecto' },
      { type: 'image', src: `${BASE}/raki6.webp`, alt: 'Raki, elfo guerrero con espada: imagen 6 del proyecto' },
    ],
    galleryConfig: { columns: 2, gap: 'small', imageSize: 'medium', aspectRatio: 'video', layout: 'masonry' },
    role: 'Artista 3D',
    team: 'Proyecto académico personal - Individual',
    duration: '3 meses',
    learnings: 'El modelado en 3ds Max fue lo más exigente: unir polígonos, respetar simetrías, usar modificadores y evitar caras ocultas. También aprendí a texturizar un personaje en Substance Painter.',
  };
