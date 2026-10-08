// src/data/projects/entries/gorobeia.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const gorobeia: ProjectInput = {
    slug: 'gorobeia',
    year: 2024,
    academicYear: '2023-24',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Gorobeia',
    description: 'Concept art de un videojuego donde Gorak defiende a su tribu. Proceso de arte digital con técnicas de ilustración en Photoshop: siluetas, capas, props y expresiones faciales.',
    challenges: 'Crear un universo visual coherente para un mundo de fantasía. Desarrollar personajes y escenarios que cuenten una historia por sí mismos a través de diferentes técnicas de ilustración.',
    solution: 'Diseñé la narrativa y el concepto del mundo, creé escenarios en blanco y negro por capas, siluetas de personajes, props, hojas de assets y diferentes expresiones faciales del protagonista.',
    highlights: [
      localizedText('🎨 Ilustraciones digitales de fantasía', '🎨 Fantasy digital illustrations'),
      localizedText('👥 Diseño de personajes y escenarios detallados', '👥 Detailed character and environment design'),
      localizedText('🌈 Paleta de colores coherente', '🌈 Coherent color palette'),
      localizedText('📖 Narrativa visual integrada', '📖 Integrated visual storytelling'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto desarrollado para la asignatura Personajes y Escenarios. El objetivo era crear un concept art completo de un videojuego ficticio, incluyendo narrativa, escenarios, personajes y diferentes técnicas de ilustración.',
          'Project developed for the Characters and Scenarios course. The goal was to create a complete concept art for a fictional video game, including narrative, environments, characters and different illustration techniques.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Diseñar el concepto visual de Gorobeia, un mundo de fantasía donde Gorak defiende a su tribu. Crear escenarios en blanco y negro por capas, siluetas de personajes, props, hojas de assets y expresiones faciales del protagonista.',
          'Design the visual concept of Gorobeia, a fantasy world where Gorak defends his tribe. Create black and white layered environments, character silhouettes, props, asset sheets and facial expressions of the protagonist.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Utilicé Photoshop para crear ilustraciones digitales con técnicas de capas, siluetas y collage digital. Desarrollé un moodboard, una paleta de colores coherente y diseñé tanto personajes como escenarios que refuerzan la narrativa del mundo.',
          'I used Photoshop to create digital illustrations using layer techniques, silhouettes and digital collage. I developed a moodboard, a coherent color palette and designed both characters and environments that reinforce the world narrative.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Desarrollé mi estilo de ilustración digital y aprendí a crear universos visuales coherentes. Mejoré mis técnicas de composición y color, y entendí cómo contar historias a través del arte conceptual.',
          'I developed my digital illustration style and learned to create coherent visual universes. I improved my composition and color techniques, and understood how to tell stories through concept art.'
        ),
      },
    ],
    skillGains: [
      localizedText('Ilustración digital en Photoshop', 'Digital illustration in Photoshop'),
      localizedText('Diseño de personajes y escenarios', 'Character and environment design'),
      localizedText('Técnicas de composición y color', 'Composition and color techniques'),
      localizedText('Narrativa visual', 'Visual storytelling'),
    ],
    tags: ['Ilustración', 'Concept Art', 'Photoshop'],
    subjects: ['Personajes y Escenarios'],
    coverImage: '/images/projects/2023-24/personajes-y-escenarios/gorobeia/gorobeia_portada.png',
    galleryImages: [
      '/images/projects/2023-24/personajes-y-escenarios/gorobeia/gorobeia1.png',
      '/images/projects/2023-24/personajes-y-escenarios/gorobeia/gorobeia2.png',
      '/images/projects/2023-24/personajes-y-escenarios/gorobeia/gorobeia3.png',
      '/images/projects/2023-24/personajes-y-escenarios/gorobeia/gorobeia4.png',
      '/images/projects/2023-24/personajes-y-escenarios/gorobeia/gorobeia5.png',
      '/images/projects/2023-24/personajes-y-escenarios/gorobeia/gorobeia6.png',
      '/images/projects/2023-24/personajes-y-escenarios/gorobeia/gorobeia7.png',
      '/images/projects/2023-24/personajes-y-escenarios/gorobeia/gorobeia8.png',
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    featured: false,
    role: 'Ilustrador y diseñador conceptual',
    team: 'Proyecto académico personal - Individual',
    duration: '2 meses',
    learnings: 'Desarrollé mi estilo de ilustración digital. Aprendí a crear universos visuales coherentes y a contar historias a través del arte. Mejoré mis técnicas de composición y color.',
    status: 'completado',
    technologies: [
      { name: 'Photoshop', level: 'principal' },
      { name: 'Photopea', level: 'principal' },
    ],
    disciplines: ['ilustracion'],
  };
