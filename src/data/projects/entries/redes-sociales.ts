// src/data/projects/entries/redes-sociales.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const redesSociales: ProjectInput = {
    slug: 'redes-sociales',
    year: 2024,
    academicYear: '2024-25',
    context: 'laboral',
    type: 'Freelance',
    title: 'Redes Sociales',
    description: 'Plantillas de Canva para equipos de fútbol en redes sociales (Instagram, Facebook). Diseño enfocado en marketing deportivo y branding de equipos.',
    challenges: 'Crear plantillas versátiles que mantengan la identidad de marca. Diseñar para diferentes formatos y plataformas con una estética coherente y profesional.',
    solution: 'Diseñé un sistema de plantillas modulares que mantienen una identidad visual coherente. Adapté cada plantilla a las especificaciones de cada plataforma y creé una guía de estilo para el cliente.',
    highlights: [
      localizedText('⚽ Diseño enfocado en marketing deportivo', '⚽ Sports-marketing-focused design'),
      localizedText('📐 Plantillas modulares y versátiles', '📐 Modular and versatile templates'),
      localizedText('🎨 Branding coherente para equipos', '🎨 Coherent team branding'),
      localizedText('📖 Guía de estilo incluida', '📖 Style guide included'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'brush',
        text: localizedText(
          'Proyecto personal para explorar el diseño gráfico en Canva. Quería experimentar con branding y marketing deportivo, creando plantillas profesionales para equipos de fútbol en redes sociales.',
          'Personal project to explore graphic design in Canva. I wanted to experiment with sports branding and marketing, creating professional templates for football teams on social media.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear un sistema de plantillas modulares para Instagram y Facebook que mantuviera una identidad visual coherente, fuera versátil y adaptado a diferentes formatos, con una guía de estilo para el cliente.',
          'Create a modular template system for Instagram and Facebook that maintained a coherent visual identity, was versatile and adapted to different formats, with a style guide for the client.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Diseñé en Canva un conjunto de plantillas modulares con identidad visual coherente. Adapté cada plantilla a las especificaciones de cada plataforma y creé una guía de estilo para garantizar la consistencia de la marca.',
          'I designed in Canva a set of modular templates with a coherent visual identity. I adapted each template to the specifications of each platform and created a style guide to ensure brand consistency.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Aprendí a diseñar para diferentes formatos y plataformas, mejoré mis habilidades de branding y marketing deportivo, y descubrí cómo crear plantillas versátiles y adaptables sin perder la identidad de marca.',
          'I learned to design for different formats and platforms, improved my branding and sports marketing skills, and discovered how to create versatile and adaptable templates without losing brand identity.'
        ),
      },
    ],
    skillGains: [
      localizedText('Diseño en Canva', 'Canva design'),
      localizedText('Branding y marketing deportivo', 'Sports branding and marketing'),
      localizedText('Diseño de plantillas modulares', 'Modular template design'),
      localizedText('Guías de estilo', 'Style guides'),
    ],
    tags: ['Canva', 'Marketing', 'Diseño Gráfico'],
    subjects: [],
    coverImage: '/images/projects/2024-25/freelance/redes-sociales/rrss_portada.png',
    galleryImages: [
      '/images/projects/2024-25/freelance/redes-sociales/rrss1.png',
      '/images/projects/2024-25/freelance/redes-sociales/rrss2.png',
      '/images/projects/2024-25/freelance/redes-sociales/rrss3.png',
      '/images/projects/2024-25/freelance/redes-sociales/rrss4.png',
      '/images/projects/2024-25/freelance/redes-sociales/rrss5.png',
      '/images/projects/2024-25/freelance/redes-sociales/rrss6.png',
      '/images/projects/2024-25/freelance/redes-sociales/rrss7.png',
      '/images/projects/2024-25/freelance/redes-sociales/rrss8.png',
      '/images/projects/2024-25/freelance/redes-sociales/rrss9.png',
      '/images/projects/2024-25/freelance/redes-sociales/rrss10.png',
    ],
    galleryConfig: { columns: 2, layout: 'masonry' },
    featured: false,
    role: 'Diseñador Gráfico',
    team: 'Proyecto personal - Individual',
    duration: '0.5 mes',
    learnings: 'Aprendí a diseñar para diferentes formatos y plataformas. Mejoré mis habilidades de branding y marketing deportivo. Descubrí cómo crear plantillas versátiles y adaptables.',
    status: 'completado',
    technologies: [
      { name: 'Canva', level: 'principal' },
    ],
    disciplines: ['diseño-2d'],
  };
