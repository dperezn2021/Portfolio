// src/data/projects/entries/whispers-of-shadows.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const whispersOfShadows: ProjectInput = {
    slug: 'whispers-of-shadows',
    year: 2024,
    academicYear: '2024-25',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'The Whispers of Shadows',
    description: 'Concepto de videojuego 3D estilo Chibi ambientado en el Reino de las Sombras. Escenario y personajes modelados en 3D con 3ds Max, incluyendo un rey oscuro y un mundo de contrastes.',
    challenges: 'Crear un mundo de sombras con estilo Chibi. Diseñar un rey que transmita autoridad y misterio. Desarrollar un visual pitch deck completo con concept art, moodboards y diseño de personajes.',
    solution: 'Utilicé un estilo Chibi con proporciones exageradas para dar un tono amigable pero misterioso. El Reino de las Sombras fue diseñado con contrastes fuertes entre luces y sombras, y el rey fue modelado con elementos que transmiten poder y enigma.',
    highlights: [
      localizedText('👑 Diseño con autoridad y misterio', '👑 Design with authority and mystery'),
      localizedText('🎨 Contraste entre luces y sombras', '🎨 Contrast between light and shadow'),
      localizedText('🧊 Modelado 3D de escenario y personajes', '🧊 3D modeling of environments and characters'),
      localizedText('📖 Visual pitch deck completo', '📖 Complete visual pitch deck'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto de la asignatura Diseño Visual y Arte Final. El objetivo era crear un visual pitch deck completo para un videojuego, incluyendo concept art, moodboards, paleta cromática, diseño de personajes y escenarios, UI/HUD y documentación de diseño.',
          'Project for the Visual Design and Final Art course. The goal was to create a complete visual pitch deck for a video game, including concept art, moodboards, color palette, character and environment design, UI/HUD and design documentation.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Desarrollar un concepto de videojuego 3D estilo Chibi ambientado en el Reino de las Sombras. Diseñar un rey oscuro que transmita autoridad y misterio, y crear un mundo de contrastes entre luces y sombras. Presentar un pitch deck profesional.',
          'Develop a 3D Chibi-style video game concept set in the Shadow Kingdom. Design a dark king that conveys authority and mystery, and create a world of contrasts between light and shadow. Present a professional pitch deck.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Utilicé 3ds Max para el modelado 3D del escenario y personajes, aunque también exploré Blender. Diseñé el estilo Chibi con proporciones exageradas y contrastes fuertes. Creé un visual pitch deck completo con referencias, moodboards, key art, diseño de personajes y escenarios, UI/HUD y GDD.',
          'I used 3ds Max for 3D modeling of environments and characters, although I also explored Blender. I designed the Chibi style with exaggerated proportions and strong contrasts. I created a complete visual pitch deck with references, moodboards, key art, character and environment design, UI/HUD and GDD.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Aprendí a crear un mundo de sombras con estilo Chibi, mejoré mis habilidades de modelado 3D y descubrí cómo diseñar un personaje que transmita autoridad y misterio. También aprendí a crear un visual pitch deck profesional para presentar un concepto de videojuego.',
          'I learned to create a shadow world with Chibi style, improved my 3D modeling skills and discovered how to design a character that conveys authority and mystery. I also learned to create a professional visual pitch deck to present a video game concept.'
        ),
      },
    ],
    skillGains: [
      localizedText('Modelado 3D en 3ds Max', '3D modeling in 3ds Max'),
      localizedText('Visual pitch deck', 'Visual pitch deck'),
      localizedText('Diseño de personajes y escenarios', 'Character and environment design'),
      localizedText('Concept art y moodboards', 'Concept art and moodboards'),
    ],
    tags: ['Chibi', '3ds Max', 'Concept Art', 'Pitch Deck'],
    subjects: ['Diseño Visual y Arte Final'],
    coverImage: '/images/projects/2024-25/diseno-visual-y-arte-final/whispers-of-shadows/whispersofshadows_portada.png',
    galleryImages: [
      '/images/projects/2024-25/diseno-visual-y-arte-final/whispers-of-shadows/whispersofshadows1.png',
      '/images/projects/2024-25/diseno-visual-y-arte-final/whispers-of-shadows/whispersofshadows2.png',
      '/images/projects/2024-25/diseno-visual-y-arte-final/whispers-of-shadows/whispersofshadows3.png',
      '/images/projects/2024-25/diseno-visual-y-arte-final/whispers-of-shadows/whispersofshadows8.png',
      '/images/projects/2024-25/diseno-visual-y-arte-final/whispers-of-shadows/whispersofshadows4.png',
      '/images/projects/2024-25/diseno-visual-y-arte-final/whispers-of-shadows/whispersofshadows5.png',
      '/images/projects/2024-25/diseno-visual-y-arte-final/whispers-of-shadows/whispersofshadows6.png',
      '/images/projects/2024-25/diseno-visual-y-arte-final/whispers-of-shadows/whispersofshadows7.png',
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    featured: false,
    role: 'Artista 3D y diseñador conceptual',
    team: 'Proyecto académico grupal - 4 personas',
    duration: '2 meses',
    learnings: 'Aprendí a crear un mundo de sombras con estilo Chibi. Mejoré mis habilidades de modelado 3D. Descubrí cómo diseñar un rey que transmita autoridad y misterio.',
    status: 'completado',
    technologies: [
      { name: '3ds Max', level: 'principal' },
    ],
    disciplines: ['modelado-3d', 'ilustracion'],
  };
