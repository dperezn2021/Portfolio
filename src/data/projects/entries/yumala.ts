// src/data/projects/entries/yumala.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const yumala: ProjectInput = {
    slug: 'yumala',
    year: 2022,
    academicYear: '2021-22',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Yumala',
    description: 'Carátula para PS4. Concept art de un MOBA en tercera persona que combina magia, mitología y elementos modernos. Collage creado con Photoshop.',
    challenges: 'Fusionar elementos antiguos y modernos en una composición visual coherente. Crear una carátula que capture la esencia del juego y llame la atención en el mercado.',
    solution: 'Realicé un collage digital combinando elementos mitológicos con diseños modernos. Utilicé técnicas de composición y color para lograr un equilibrio visual que transmite la fusión de mundos del juego.',
    highlights: [
      localizedText('🎨 Carátula para PS4', '🎨 PS4 cover art'),
      localizedText('🔄 Fusión de magia, mitología y modernidad', '🔄 Fusion of magic, mythology, and modernity'),
      localizedText('🖼️ Técnica de collage digital', '🖼️ Digital collage technique'),
      localizedText('🎯 Composición visual equilibrada', '🎯 Balanced visual composition'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto de la asignatura Diseño 2D. El objetivo era crear una carátula para una consola de la época usando técnicas de collage digital. Elegí PS4 y diseñé Yumala, un concepto de MOBA en tercera persona que combina magia, mitología y elementos modernos.',
          'Project for the 2D Design course. The goal was to create a cover for a console of the era using digital collage techniques. I chose PS4 and designed Yumala, a third-person MOBA concept combining magic, mythology and modern elements.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear una carátula impactante para PS4 que fusionara elementos antiguos y modernos, capturando la esencia de un juego MOBA en tercera persona con temática de magia y mitología.',
          'Create an impactful PS4 cover that merged ancient and modern elements, capturing the essence of a third-person MOBA game with magic and mythology themes.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Utilicé técnicas de collage digital en Photoshop para combinar elementos mitológicos con diseños modernos. Apliqué técnicas de composición y color para lograr un equilibrio visual que transmitiera la fusión de mundos del juego.',
          'I used digital collage techniques in Photoshop to combine mythological elements with modern designs. I applied composition and color techniques to achieve a visual balance that conveyed the fusion of game worlds.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Aprendí a fusionar elementos antiguos y modernos en una composición visual coherente. Mejoré mis habilidades de collage digital y descubrí cómo crear una carátula que capture la esencia de un juego y llame la atención en el mercado.',
          'I learned to merge ancient and modern elements into a coherent visual composition. I improved my digital collage skills and discovered how to create a cover that captures the essence of a game and stands out in the market.'
        ),
      },
    ],
    skillGains: [
      localizedText('Collage digital en Photoshop', 'Digital collage in Photoshop'),
      localizedText('Composición y color', 'Composition and color'),
      localizedText('Diseño de carátulas', 'Cover design'),
      localizedText('Concept art de MOBA', 'MOBA concept art'),
    ],
    tags: ['Collage', 'Photoshop', 'Diseño Gráfico'],
    subjects: ['Diseño Digital 2D'],
    coverImage: '/images/projects/2021-22/diseno-digital-2d/yumala/yumala_portada.png',
    galleryImages: [
      '/images/projects/2021-22/diseno-digital-2d/yumala/yumala1.png',
    ],
    galleryConfig: { columns: 4, layout: 'masonry' },
    featured: false,
    role: 'Ilustrador y diseñador',
    team: 'Proyecto académico personal - Individual',
    duration: '3 semanas',
    learnings: 'Aprendí a fusionar elementos antiguos y modernos en una composición visual. Mejoré mis habilidades de collage digital. Descubrí cómo crear una carátula que capture la esencia de un juego.',
    status: 'completado',
    technologies: [
      { name: 'Photoshop', level: 'principal' },
    ],
    disciplines: ['diseño-2d', 'ilustracion'],
  };
