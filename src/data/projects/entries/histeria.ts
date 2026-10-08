// src/data/projects/entries/histeria.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const histeria: ProjectInput = {
    slug: 'histeria',
    year: 2025,
    academicYear: '2024-25',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Histeria: Los Fragmentos de la Mente',
    description: 'Roguelike narrativo pixel 2D que busca concienciar sobre la salud mental. Explora la mente fragmentada de Eli, una chica de 18 años que lucha contra sus emociones en forma de enemigos.',
    challenges: 'Crear una narrativa sensible sobre salud mental manteniendo la jugabilidad roguelike atractiva. Lograr que el pixel art transmita emociones complejas y el juego funcione como herramienta de sensibilización.',
    solution: 'Diseñamos una narrativa que se desarrolla a través de fragmentos de memoria. Usamos pixel art para transmitir emociones de forma sutil, con mecánicas roguelike donde los enemigos representan emociones negativas. Las recompensas son narrativas y emocionales.',
    highlights: [
      localizedText('🧠 Narrativa sobre salud mental con enfoque sensible', '🧠 Sensitive mental health narrative'),
      localizedText('🎮 Mecánicas roguelike con progresión narrativa', '🎮 Roguelike mechanics with narrative progression'),
      localizedText('🖼️ Sistema de diálogos y fragmentos de memoria', '🖼️ Dialogue and memory fragments system'),
      localizedText('🎨 Pixel art emocional y atmosférico', '🎨 Emotional and atmospheric pixel art'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto desarrollado en equipo para las asignaturas Gestión y Dirección de Proyectos y Juegos para Web y Redes Sociales. Aprendimos flujo de trabajo con diagramas Gantt y PERT, presupuestos, fases de proyecto, y desarrollamos un juego completo en equipo sobre salud mental.',
          'Team project developed for Project Management and Web/Social Games courses. We learned workflow with Gantt and PERT diagrams, budgets, project phases, and developed a complete team game about mental health.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear un roguelike narrativo en pixel art 2D que sirva como herramienta de sensibilización sobre salud mental. El jugador explora la mente fragmentada de Eli, enfrentándose a versiones simbólicas de emociones negativas mientras recupera recuerdos reprimidos.',
          'Create a narrative roguelike in 2D pixel art that serves as a mental health awareness tool. The player explores Eli fragmented mind, facing symbolic versions of negative emotions while recovering repressed memories.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Desarrollamos el juego en Unity con C#. Implementamos mecánicas de movimiento 2D en 8 direcciones, sistema de combate contra emociones (miedo, ira, tristeza), sistema de diálogos y progresión narrativa donde las recompensas son fragmentos de memoria que desbloquean nuevas áreas y habilidades emocionales.',
          'We developed the game in Unity with C#. We implemented 2D 8-direction movement, combat system against emotions (fear, anger, sadness), dialogue system and narrative progression where rewards are memory fragments that unlock new areas and emotional abilities.'
        ),
      },
      {
        kind: 'learning',
        icon: 'bolt',
        text: localizedText(
          'Aprendí a gestionar un proyecto en equipo con metodologías ágiles, a desarrollar un roguelike narrativo y a transmitir emociones complejas a través del pixel art. Descubrí cómo el diseño de videojuegos puede ser una herramienta de sensibilización social.',
          'I learned to manage a team project with agile methodologies, to develop a narrative roguelike and to convey complex emotions through pixel art. I discovered how video game design can be a tool for social awareness.'
        ),
      },
    ],
    skillGains: [
      localizedText('Gestión de proyectos (Gantt, PERT)', 'Project management (Gantt, PERT)'),
      localizedText('Desarrollo en Unity con C#', 'Unity development with C#'),
      localizedText('Pixel art emocional', 'Emotional pixel art'),
      localizedText('Narrativa en videojuegos', 'Video game narrative'),
      localizedText('Trabajo en equipo y metodologías ágiles', 'Teamwork and agile methodologies'),
    ],
    tags: ['Unity', 'C#', 'Pixel Art', 'Narrativa'],
    subjects: ['Juegos para Web y Redes Sociales', 'Gestión y Dirección de Proyectos'],
    coverImage: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria_portada.png',
    gallery: [
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria1.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria2.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria3.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria4.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria5.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria6.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria7.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria8.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria11.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria12.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria13.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria14.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria15.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria17.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria18.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria20.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria21.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria22.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria23.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria24.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-para-web-y-redes-sociales/histeria/histeria25.png' },
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    featured: true,
    links: [
      { label: 'Jugar', url: 'https://sealystudio.itch.io/histeria-fragmentos-de-la-mente' },
      { label: 'Web Sealy Studio', url: 'https://linktr.ee/sealy.studio' },
    ],
    role: 'Programador y diseñador de narrativa',
    team: 'SealyStudio - 5 personas',
    duration: '6 meses',
    learnings: 'Aprendí a realizar videojuegos de temática roguelike. Descubrí cómo el pixel art puede transmitir emociones complejas con recursos limitados. Mejoré mis habilidades de trabajo en equipo y gestión de proyectos.',
    status: 'completado',
    technologies: [
      { name: 'Unity', level: 'principal' },
      { name: 'C#', level: 'principal' },
      { name: 'itch.io', level: 'secundaria' },
    ],
    disciplines: ['videojuegos', 'ilustracion'],
  };
