// src/data/projects/entries/si-senor-oscuro.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2022-23/proceso-de-desarrollo-de-videojuegos/si-senor-oscuro';

const cards: { file: string; alt: string }[] = [
  { file: 'carta-01', alt: 'Carta «Brebaje de potaje»: un caldero con un líquido amarillo burbujeante' },
  { file: 'carta-02', alt: 'Carta «Cocodrilo o magdalena»: una magdalena verde y un cocodrilo naranja' },
  { file: 'carta-03', alt: 'Carta «Amienemigo»: un personaje abraza a otro que esconde una daga' },
  { file: 'carta-04', alt: 'Carta «¡Un dragón!»: un dragón morado sobre llamas' },
  { file: 'carta-05', alt: 'Carta «Agujetas, en el peor momento»: espalda con dos zonas doloridas marcadas' },
  { file: 'carta-06', alt: 'Carta «Rebelión de marionetas»: dos marionetas colgadas de sus hilos' },
  { file: 'carta-07', alt: 'Carta «Pozo de lava»: un pozo de lava visto desde arriba' },
  { file: 'carta-08', alt: 'Carta «Fantasma vengativo»: un fantasma de un solo ojo con un hacha' },
  { file: 'carta-09', alt: 'Carta «Gato negro»: un gatito negro de ojos grandes' },
  { file: 'carta-10', alt: 'Carta «Flor de pétalos impares»: una flor morada de cinco pétalos' },
  { file: 'carta-11', alt: 'Carta «La llave del armario»: una llave roja y morada' },
  { file: 'carta-12', alt: 'Carta «El tornado inmóvil»: un tornado gris de gesto amenazante' },
  { file: 'carta-13', alt: 'Carta «Señoras del barranco»: dos monjas al borde de un acantilado' },
  { file: 'carta-14', alt: 'Carta «Sueño compartido»: dos personas durmiendo que sueñan con una oveja' },
  { file: 'carta-15', alt: 'Carta «El ermitaño fiestero»: un cangrejo ermitaño con gorro de fiesta y globos' },
  { file: 'carta-16', alt: 'Carta «Musarañas»: cuatro musarañas' },
  { file: 'carta-17', alt: 'Carta «Hada atrap-hada»: un hada encerrada en un tarro' },
  { file: 'carta-18', alt: 'Carta «La tumba oscura»: una lápida sobre un montículo de hierba' },
  { file: 'carta-19', alt: 'Carta «El chocolate irresistible»: una tableta de chocolate cortada en diagonal' },
  { file: 'carta-20', alt: 'Carta «Mariposas vampiro»: una mariposa con colmillos y capa' },
  { file: 'carta-21', alt: 'Reverso de las cartas: un reloj de arena entre dos flores sobre un patrón de triángulos' },
];

export const siSenorOscuro: ProjectInput = {
    slug: 'si-senor-oscuro',
    year: 2023,
    academicYear: '2022-23',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Sí, Señor Oscuro',
    description: 'Adaptación grupal del juego de mesa «¡Sí, Señor Oscuro!» a formato digital, con turnos, tablero e interfaz. Diseñé las cartas ilustradas en Photoshop y participé de forma activa en la gestión del proyecto con Miro y Jira.',
    highlights: [
      localizedText('🃏 Diseño de las cartas ilustradas', '🃏 Illustrated card design'),
      localizedText('🎨 Ilustración digital con Photoshop', '🎨 Digital illustration with Photoshop'),
      localizedText('🗂️ Gestión del proyecto con Miro y Jira', '🗂️ Project management with Miro and Jira'),
      localizedText('🔄 Adaptación de un juego de mesa a digital en equipo', '🔄 Team adaptation of a board game to digital'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto de la asignatura Proceso de Desarrollo de Videojuegos, donde trabajamos metodologías como Scrum y cascada, y herramientas como Jira y Miro para organizar un proyecto en equipo.',
          'Project for the Video Game Development Process course, where we worked with methodologies such as Scrum and waterfall, and tools such as Jira and Miro to organise a team project.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Adaptar entre todo el equipo el juego de mesa «¡Sí, Señor Oscuro!» a formato digital, con turnos, tablero e interfaz. Mi parte era el diseño de las cartas.',
          'Adapt the board game "Yes, Dark Lord!" to a digital format as a team, with turns, a board and an interface. My part was designing the cards.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'El equipo desarrolló el juego en Unity y planificó el trabajo por iteraciones (sprints) con Miro y Jira. Yo diseñé las cartas en Photoshop y participé de forma activa en la gestión del proyecto. La programación en Unity no fue parte de mi trabajo.',
          'The team built the game in Unity and planned the work in iterations (sprints) with Miro and Jira. I designed the cards in Photoshop and took an active part in project management. Unity programming was not part of my work.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Planificar por iteraciones con Miro y Jira dio al equipo una organización clara a lo largo del proyecto.',
          'Planning in iterations with Miro and Jira gave the team a clear organisation throughout the project.'
        ),
      },
    ],
    skillGains: [
      localizedText('Ilustración de cartas en Photoshop', 'Card illustration in Photoshop'),
      localizedText('Planificación por sprints', 'Sprint planning'),
      localizedText('Gestión de proyectos con Jira y Miro', 'Project management with Jira and Miro'),
    ],
    tags: ['Ilustración', 'Game Design', 'Scrum', 'Jira'],
    subjects: ['Proceso de Desarrollo de Videojuegos'],
    disciplines: ['diseño-2d', 'ilustracion'],
    technologies: [
      { name: 'Photoshop', level: 'principal' },
      { name: 'Jira', level: 'secundaria' },
      { name: 'Miro', level: 'secundaria' },
    ],
    featured: false,
    status: 'completado',
    coverImage: `${BASE}/siseñoroscuro_portada.png`,
    featuredMedia: {
      type: 'image',
      src: `${BASE}/siseñoroscuro_portada.png`,
      alt: 'Caja del juego de mesa original «¡Sí, Señor Oscuro!», usada como referencia del proyecto',
    },
    gallery: cards.map(({ file, alt }) => ({ type: 'image' as const, src: `${BASE}/${file}.png`, alt })),
    galleryConfig: { columns: 4, gap: 'small', layout: 'masonry' },
    role: 'Diseñador de cartas y apoyo en la gestión del proyecto',
    team: 'Proyecto académico grupal - 6 personas',
    duration: '2 meses',
  };
