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
    description: 'Carátula de PS4 para Yumala, un videojuego conceptual (MOBA en tercera persona que mezcla magia, mitología y elementos modernos). Composición por capas en Photoshop a partir de bocetos, con título y logotipo hechos con recursos gráficos externos.',
    challenges: 'Fusionar elementos antiguos y modernos en una composición visual coherente.',
    solution: 'Partí de bocetos y monté la carátula por capas en Photoshop, combinando elementos mitológicos y modernos y añadiendo el título y el logotipo. Mi trabajo fue la composición y el montaje; parte de los recursos gráficos son externos.',
    highlights: [
      localizedText('🎨 Carátula final de PS4', '🎨 Final PS4 cover'),
      localizedText('🔄 Mezcla de magia, mitología y modernidad', '🔄 Mix of magic, mythology and modernity'),
      localizedText('🖼️ Composición por capas en Photoshop', '🖼️ Layered composition in Photoshop'),
      localizedText('🔤 Título y logotipo con recursos gráficos externos', '🔤 Title and logo built with external graphic resources'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto de la asignatura Diseño Digital 2D. Consistía en diseñar la carátula de un videojuego para una consola de la época; elegí PS4.',
          'Project for the 2D Digital Design course. It consisted of designing the cover of a video game for a console of the era; I chose PS4.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear la carátula de Yumala, un MOBA conceptual en tercera persona con magia, mitología y elementos modernos, de forma que la composición resultara coherente.',
          'Create the cover of Yumala, a conceptual third-person MOBA with magic, mythology and modern elements, so that the composition felt coherent.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Hice bocetos y compuse la carátula por capas en Photoshop. El título y el logotipo los monté con recursos gráficos externos, por lo que mi aportación es la composición y el montaje, no la ilustración original de todos los elementos.',
          'I made sketches and composed the cover in layers in Photoshop. I built the title and logo with external graphic resources, so my contribution is the composition and assembly, not original illustration of every element.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Fue mi primer trabajo con Photoshop: aprendí lo básico de trabajar con capas y de componer una imagen, sin dificultades destacables.',
          'It was my first piece of work in Photoshop: I learned the basics of working with layers and composing an image, with no major difficulties.'
        ),
      },
    ],
    skillGains: [
      localizedText('Composición por capas en Photoshop', 'Layered composition in Photoshop'),
      localizedText('Collage digital', 'Digital collage'),
      localizedText('Diseño de carátulas', 'Cover design'),
    ],
    tags: ['Collage', 'Photoshop', 'Diseño Gráfico'],
    subjects: ['Diseño Digital 2D'],
    disciplines: ['diseño-2d', 'ilustracion'],
    technologies: [
      { name: 'Photoshop', level: 'principal' },
    ],
    featured: false,
    status: 'completado',
    coverImage: '/images/projects/2021-22/diseno-digital-2d/yumala/yumala_portada.jpg',
    gallery: [],
    galleryConfig: { columns: 4, layout: 'masonry' },
    resources: [
      { type: 'pdf', url: '/images/projects/2021-22/diseno-digital-2d/yumala/memoria.pdf', title: 'Memoria PDF' },
    ],
    role: 'Diseñador gráfico (composición y montaje)',
    team: 'Proyecto académico personal - Individual',
    duration: '3 semanas',
    learnings: 'Primer contacto con Photoshop: bocetos, trabajo por capas y composición de una carátula.',
  };
