// src/data/projects/entries/raki.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const raki: ProjectInput = {
    slug: 'raki',
    year: 2023,
    academicYear: '2021-22',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Raki',
    description: 'Modelado de un personaje estilo elfo guerrero y su espada para videojuego. Técnicas en 3dsMax con turn around, unwrapping y texturizado en Substance Painter.',
    challenges: 'Crear un personaje estilizado con personalidad. Texturizar de forma que transmita la esencia del personaje. Realizar el turn around (vistas frontal y de perfil) para guiar el modelado.',
    solution: 'Diseñé el turn around del personaje para guiar el modelado en 3ds Max. Modelé armadura, guantes, cuerpo, ojos, cara y pelo, después hice unwrapping y texturizado en Substance Painter.',
    highlights: [
      localizedText('🧑‍🎨 Personaje digital detallado', '🧑‍🎨 Detailed digital character'),
      localizedText('🎨 Texturizado PBR con Substance Painter', '🎨 PBR texturing with Substance Painter'),
      localizedText('📐 Modelado optimizado para videojuegos', '📐 Game-optimized modeling'),
      localizedText('🔄 Turn around para guiar el modelado', '🔄 Turn around to guide modeling'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Segundo proyecto de la asignatura Diseño 3D. Después de modelar un escenario, el siguiente paso fue incluir un personaje. Diseñé Raki, un elfo guerrero, realizando su turn around (vistas frontal y de perfil) para guiar el modelado en 3D.',
          'Second project of the 3D Design course. After modeling a scenario, the next step was to include a character. I designed Raki, a warrior elf, creating his turn around (front and profile views) to guide the 3D modeling.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear un personaje completo en 3D, incluyendo su arma, con técnicas profesionales de modelado, unwrapping y texturizado PBR. El personaje debía tener personalidad y estar optimizado para videojuegos.',
          'Create a complete 3D character, including his weapon, with professional modeling, unwrapping and PBR texturing techniques. The character had to have personality and be optimized for video games.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Realicé el turn around del personaje en 2D para guiar el modelado. Modelé en 3ds Max todos los elementos: armadura, guantes, cuerpo, ojos, cara y pelo, y la espada. Después hice unwrapping y texturizado en Substance Painter para lograr un acabado profesional.',
          'I created the character turn around in 2D to guide the modeling. I modeled in 3ds Max all elements: armor, gloves, body, eyes, face and hair, and the sword. Then I did unwrapping and texturing in Substance Painter for a professional finish.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Mejoré mis habilidades de modelado en 3ds Max y aprendí a texturizar con Substance Painter. Descubrí cómo transmitir personalidad a través del diseño de personajes y la importancia del turn around para guiar el proceso de modelado.',
          'I improved my 3ds Max modeling skills and learned to texture with Substance Painter. I discovered how to convey personality through character design and the importance of turn around to guide the modeling process.'
        ),
      },
    ],
    skillGains: [
      localizedText('Modelado en 3ds Max', '3ds Max modeling'),
      localizedText('Texturizado PBR en Substance Painter', 'PBR texturing in Substance Painter'),
      localizedText('Turn around de personajes', 'Character turn around'),
      localizedText('Optimización para videojuegos', 'Video game optimization'),
    ],
    tags: ['3ds Max', 'Substance Painter', 'Modelado 3D', 'Personajes'],
    subjects: ['Diseño 3D'],
    coverImage: '/images/projects/2021-22/diseno-3d/raki/raki_portada.png',
    galleryImages: [
      '/images/projects/2021-22/diseno-3d/raki/raki1.png',
      '/images/projects/2021-22/diseno-3d/raki/raki2.png',
      '/images/projects/2021-22/diseno-3d/raki/raki3.png',
      '/images/projects/2021-22/diseno-3d/raki/raki4.png',
      '/images/projects/2021-22/diseno-3d/raki/raki5.png',
      '/images/projects/2021-22/diseno-3d/raki/raki6.png',
    ],
    galleryConfig: { columns: 2, gap: 'small', imageSize: 'medium', aspectRatio: 'video', layout: 'masonry' },
    featured: false,
    role: 'Artista 3D',
    team: 'Proyecto académico personal - Individual',
    duration: '3 meses',
    learnings: 'Mejoré mis habilidades de modelado en 3ds Max. Aprendí a texturizar con Substance Painter. Descubrí cómo transmitir personalidad a través del diseño de personajes.',
    status: 'completado',
    technologies: [
      { name: '3ds Max', level: 'principal' },
      { name: 'Substance Painter', level: 'principal' },
    ],
    disciplines: ['modelado-3d'],
  };
