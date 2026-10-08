// src/data/projects/entries/international-warfare.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const internationalWarfare: ProjectInput = {
    slug: 'international-warfare',
    year: 2022,
    academicYear: '2021-22',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'International Warfare',
    description: 'Simulación de campaña de financiación para un videojuego. Proyecto para aprender diseño y desarrollo web, concepto art, redes sociales y el proceso completo de lanzamiento de un videojuego.',
    challenges: 'Diseñar una web profesional que simule una campaña de crowdfunding. Transmitir confianza y profesionalidad en todos los aspectos del proyecto: web, redes sociales, trailer y documento de diseño.',
    solution: 'Diseñé una interfaz limpia y profesional con secciones claras para la campaña. Creé el concept art, el trailer, la música, las redes sociales y el GDD completo para simular el lanzamiento de un videojuego.',
    highlights: [
      localizedText('💰 Simulación de campaña de crowdfunding', '💰 Crowdfunding campaign simulation'),
      localizedText('📊 Sistema de seguimiento de progreso', '📊 Progress tracking system'),
      localizedText('🎨 Diseño web profesional y limpio', '🎨 Clean and professional web design'),
      localizedText('🎬 Trailer y música original', '🎬 Trailer and original music'),
      localizedText('📱 Estrategia en redes sociales', '📱 Social media strategy'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto desarrollado para la asignatura Multimedia, Fundamentos del Diseño y Jugabilidad. El objetivo era crear un proyecto completo de lanzamiento de un videojuego, incluyendo concept art, web, redes sociales, trailer y campaña de crowdfunding.',
          'Project developed for the Multimedia, Design Fundamentals and Gameplay course. The goal was to create a complete video game launch project, including concept art, website, social media, trailer and crowdfunding campaign.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Simular el lanzamiento profesional de un videojuego, creando todos los activos necesarios: web con campaña de crowdfunding, presencia en redes sociales, trailer con música original, GDD y estrategia de marketing.',
          'Simulate the professional launch of a video game, creating all necessary assets: website with crowdfunding campaign, social media presence, trailer with original music, GDD and marketing strategy.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Diseñé y desarrollé una web profesional con sistema de simulación de donaciones y seguimiento de progreso. Creé el concept art del juego, un trailer con música original, gestioné redes sociales y elaboré el documento de diseño del juego (GDD) completo.',
          'I designed and developed a professional website with donation simulation and progress tracking. I created the game concept art, a trailer with original music, managed social media and prepared the complete Game Design Document (GDD).'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Aprendí todo el proceso de lanzamiento de un videojuego: desde el concepto hasta la campaña de financiación. Me familiaricé con el desarrollo web, el marketing digital y la importancia de una presencia profesional en redes sociales.',
          'I learned the entire video game launch process: from concept to funding campaign. I became familiar with web development, digital marketing and the importance of a professional social media presence.'
        ),
      },
    ],
    skillGains: [
      localizedText('Desarrollo web (HTML, CSS, JS)', 'Web development (HTML, CSS, JS)'),
      localizedText('Concept art y diseño visual', 'Concept art and visual design'),
      localizedText('Estrategia de marketing digital', 'Digital marketing strategy'),
      localizedText('Documentación de diseño de juegos', 'Game design documentation'),
    ],
    tags: ['Crowdfunding', 'Web', 'Marketing', 'GDD'],
    subjects: ['Fundamentos del Diseño y la Jugabilidad', 'Multimedia'],
    coverImage: '/images/projects/2021-22/fundamentos-del-diseno-y-la-jugabilidad/international-warfare/internationalwarfare_portada.png',
    galleryImages: [
      '/images/projects/2021-22/fundamentos-del-diseno-y-la-jugabilidad/international-warfare/internationalwarfare1.png',
      '/images/projects/2021-22/fundamentos-del-diseno-y-la-jugabilidad/international-warfare/internationalwarfare2.png',
    ],
    galleryConfig: { columns: 4, layout: 'masonry' },
    featured: false,
    links: [{ label: 'Ir a la web', url: 'https://interwarfare2022.github.io/InterWarfare.github.io/' }],
    role: 'Desarrollador Web y Diseñador',
    team: 'Proyecto académico grupal - 5 personas',
    duration: '3 meses',
    learnings: 'Aprendí conceptos sobre desarrollo web, marketing digital y financiación de videojuegos. Me familiaricé con el proceso completo de lanzamiento de un videojuego.',
    status: 'completado',
    technologies: [
      { name: 'HTML', level: 'principal' },
      { name: 'CSS', level: 'principal' },
      { name: 'JavaScript', level: 'secundaria' },
    ],
    disciplines: ['desarrollo-web', 'ilustracion'],
  };
