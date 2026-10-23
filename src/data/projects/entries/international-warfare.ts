// src/data/projects/entries/international-warfare.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2021-22/fundamentos-del-diseno-y-la-jugabilidad/international-warfare';

export const internationalWarfare: ProjectInput = {
    slug: 'international-warfare',
    year: 2022,
    academicYear: '2021-22',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'International Warfare',
    description: 'Concepto de un videojuego ficticio con documento de diseño (GDD) y simulación de una campaña de financiación. Mi parte fue el diseño gráfico (armas, carátulas e imágenes promocionales), la página web en HTML y CSS y parte del marketing.',
    challenges: 'Era mi primera página web: ajustar márgenes, padding, títulos y bloques me llevó muchas horas.',
    solution: 'Diseñé las armas, las carátulas y las imágenes promocionales, y maqueté la web de la campaña en HTML y CSS con VS Code.',
    highlights: [
      localizedText('💰 Simulación de campaña de financiación', '💰 Funding campaign simulation'),
      localizedText('🔫 Diseño de armas, carátulas e imágenes promocionales', '🔫 Weapon, cover and promotional image design'),
      localizedText('🌐 Primera página web en HTML y CSS', '🌐 First web page in HTML and CSS'),
      localizedText('📣 Participación en el marketing del proyecto', '📣 Part of the project marketing'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto de las asignaturas Fundamentos del Diseño y la Jugabilidad y Multimedia, en primer curso. Se trataba de presentar un videojuego ficticio como si fuera a salir adelante con una campaña de financiación.',
          'Project for the Design and Gameplay Fundamentals and Multimedia courses, in the first year. The task was to present a fictional video game as if it were going to be launched through a funding campaign.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Reunir el material de un videojuego ficticio: su documento de diseño (GDD), el material gráfico y una web que simulara la campaña de financiación.',
          'Put together the material for a fictional video game: its design document (GDD), the graphic material and a website simulating the funding campaign.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Me encargué del diseño gráfico (armas, carátulas e imágenes promocionales) con Photoshop, de la página web en HTML y CSS con VS Code y de parte del marketing.',
          'I handled the graphic design (weapons, covers and promotional images) with Photoshop, the website in HTML and CSS with VS Code, and part of the marketing.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Fue mi primera web, y ajustar márgenes, padding, títulos y bloques me llevó muchas horas.',
          'It was my first website, and adjusting margins, padding, titles and blocks took me many hours.'
        ),
      },
    ],
    skillGains: [
      localizedText('Maquetación web con HTML y CSS', 'Web layout with HTML and CSS'),
      localizedText('Diseño gráfico y material promocional', 'Graphic design and promotional material'),
      localizedText('Documentación de diseño de juegos (GDD)', 'Game design documentation (GDD)'),
    ],
    tags: ['Crowdfunding', 'Web', 'Marketing', 'GDD'],
    subjects: ['Fundamentos del Diseño y la Jugabilidad', 'Multimedia'],
    disciplines: ['desarrollo-web', 'ilustracion'],
    technologies: [
      { name: 'Photoshop', level: 'principal' },
      { name: 'HTML', level: 'principal' },
      { name: 'CSS', level: 'principal' },
      { name: 'VS Code', level: 'secundaria' },
    ],
    featured: false,
    status: 'completado',
    coverImage: `${BASE}/internationalwarfare_portada.jpg`,
    gallery: [
      { type: 'image', src: `${BASE}/internationalwarfare1.webp`, alt: 'Material gráfico de International Warfare, imagen 1' },
      { type: 'image', src: `${BASE}/internationalwarfare2.webp`, alt: 'Material gráfico de International Warfare, imagen 2' },
      { type: 'image', src: `${BASE}/caratula1.webp`, alt: 'Carátula de International Warfare, versión 1' },
      { type: 'image', src: `${BASE}/caratula2.webp`, alt: 'Carátula de International Warfare, versión 2' },
      { type: 'video', src: `${BASE}/gameplay.mp4`, poster: `${BASE}/gameplay-poster.jpg`, title: 'Vídeo del proyecto', titleEn: 'Project video' },
    ],
    galleryConfig: { columns: 2, gap: 'small', layout: 'masonry' },
    resources: [{ type: 'link', url: 'https://interwarfare2022.github.io/InterWarfare.github.io/', title: 'Ir a la web' }],
    role: 'Diseñador gráfico y desarrollador web',
    team: 'Proyecto académico grupal - 5 personas',
    duration: '3 meses',
    learnings: 'Mi primera web en HTML y CSS: ajustar márgenes, padding, títulos y bloques me llevó muchas horas.',
  };
