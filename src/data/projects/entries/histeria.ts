// src/data/projects/entries/histeria.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria';

const shot = (n: number, alt = 'Captura de Histeria: Los Fragmentos de la Mente') => ({
  type: 'image' as const,
  src: `${BASE}/histeria${n}.webp`,
  alt,
});

export const histeria: ProjectInput = {
    slug: 'histeria',
    year: 2025,
    academicYear: '2024-25',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Histeria: Los Fragmentos de la Mente',
    description: 'Roguelike narrativo en pixel art, desarrollado en equipo (SealyStudio), sobre una niña que afronta el duelo tras la muerte de su madre. Hecho con Unity y C#; yo me encargué de la programación, los niveles, los objetos en Unity, la publicación en itch.io y parte de la gestión.',
    challenges: 'Coordinar a un equipo de cinco personas, cumplir los plazos e integrar el trabajo de todos en un único juego, tratando un tema delicado con respeto.',
    solution: 'Planificación del proyecto con presupuestos y fases, y un juego en Unity con dash, lágrimas, puñetazo, objetos con sonido y diálogos. Publicamos el juego en itch.io.',
    highlights: [
      localizedText('🎮 Roguelike narrativo en pixel art 2D', '🎮 Narrative roguelike in 2D pixel art'),
      localizedText('⚔️ Dash, lágrimas, puñetazo y objetos con audio', '⚔️ Dash, tears, punch and objects with audio'),
      localizedText('💬 Sistema de diálogos', '💬 Dialogue system'),
      localizedText('🚀 Publicado en itch.io', '🚀 Released on itch.io'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto de equipo (SealyStudio, 5 personas) para las asignaturas Juegos para Web y Redes Sociales y Gestión y Dirección de Proyectos (2024-25). Además del juego, incluyó la planificación y los presupuestos del proyecto.',
          'Team project (SealyStudio, 5 people) for the Web and Social Network Games and Project Management and Direction courses (2024-25). Besides the game, it included project planning and budgets.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear un roguelike narrativo sobre una niña que afronta el duelo tras la muerte de su madre, y publicarlo para que se pueda jugar desde el navegador.',
          'Create a narrative roguelike about a girl coping with grief after her mother\'s death, and release it so it can be played in the browser.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'El juego se desarrolló en Unity con C#, con sprites hechos en Photoshop, un dash, lágrimas, un puñetazo, objetos con audio y diálogos. Yo programé, diseñé niveles, preparé objetos en Unity, publiqué el juego en itch.io y participé en la gestión del proyecto.',
          'The game was built in Unity with C#, with sprites made in Photoshop, a dash, tears, a punch, objects with audio and dialogues. I programmed, designed levels, set up objects in Unity, released the game on itch.io and took part in project management.'
        ),
      },
      {
        kind: 'learning',
        icon: 'bolt',
        text: localizedText(
          'Lo más difícil fue la coordinación del equipo, el cumplimiento de los plazos y la integración de las partes. El resultado final me dejó satisfecho.',
          'The hardest parts were team coordination, meeting deadlines and integrating the different parts. I was happy with the final result.'
        ),
      },
    ],
    skillGains: [
      localizedText('Programación de gameplay en Unity con C#', 'Gameplay programming in Unity with C#'),
      localizedText('Diseño de niveles', 'Level design'),
      localizedText('Planificación y presupuestos de proyecto', 'Project planning and budgeting'),
      localizedText('Publicación de juegos en itch.io', 'Publishing games on itch.io'),
    ],
    tags: ['Unity', 'C#', 'Pixel Art', 'Narrativa'],
    subjects: ['Juegos para Web y Redes Sociales', 'Gestión y Dirección de Proyectos'],
    disciplines: ['videojuegos', 'ilustracion'],
    technologies: [
      { name: 'Unity', level: 'principal' },
      { name: 'C#', level: 'principal' },
      { name: 'Photoshop', level: 'secundaria' },
      { name: 'itch.io', level: 'secundaria' },
    ],
    status: 'completado',
    coverImage: `${BASE}/histeria_portada.jpg`,
    gallery: [
      shot(1, 'Escena en pixel art de una habitación oscura con una chimenea, un sillón y una ventana'),
      shot(2), shot(3), shot(4), shot(5), shot(6), shot(7), shot(8),
      shot(11), shot(12), shot(13), shot(14),
      shot(15, 'Diálogo con una versión corrupta de Eli sobre una pared de ladrillo, con corazones y contadores en pantalla'),
      shot(17), shot(18), shot(20), shot(21), shot(22), shot(23), shot(24), shot(25),
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    resources: [
      { type: 'link', url: 'https://sealystudio.itch.io/histeria-fragmentos-de-la-mente', title: 'Jugar' },
      { type: 'link', url: 'https://linktr.ee/sealy.studio', title: 'Web Sealy Studio' },
    ],
    role: 'Programador, diseñador de niveles y gestión',
    team: 'SealyStudio - 5 personas',
    duration: '6 meses',
    learnings: 'La coordinación del equipo, los plazos y la integración fueron lo más difícil. Quedé satisfecho con el resultado.',
    featured: true,
  };
