// src/data/projects/entries/si-senor-oscuro.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const siSenorOscuro: ProjectInput = {
    slug: 'si-senor-oscuro',
    year: 2023,
    academicYear: '2022-23',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Sí, Señor Oscuro',
    description: 'Adaptación digital del juego de mesa de rol. Diseño de cartas ilustradas con Photoshop, cada una con un rol diferente dentro del videojuego.',
    challenges: 'Mantener la esencia del juego de mesa en la versión digital. Diseñar cartas que comuniquen su función de forma intuitiva y mantengan la estética del juego original.',
    solution: 'Trabajé en estrecha colaboración con el equipo para entender la esencia del juego original. Diseñé las cartas con iconografía clara y colores diferenciados para cada rol, manteniendo la estética del juego de mesa.',
    highlights: [
      localizedText('🃏 Diseño de cartas ilustradas', '🃏 Illustrated card design'),
      localizedText('🎨 Ilustración digital con Photoshop', '🎨 Digital illustration with Photoshop'),
      localizedText('👥 Trabajo en equipo multidisciplinar', '👥 Multidisciplinary teamwork'),
      localizedText('🔄 Adaptación de juego de mesa a digital', '🔄 Board game to digital adaptation'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto de la asignatura Proceso de Desarrollo de Videojuegos. Aprendimos metodologías como Scrum, cascada, sprints, y herramientas como Jira o Miro para gestionar un proyecto en equipo. El objetivo era adaptar un juego de mesa a formato digital.',
          'Project for the Video Game Development Process course. We learned methodologies like Scrum, waterfall, sprints, and tools like Jira or Miro to manage a team project. The goal was to adapt a board game to digital format.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Adaptar el juego de mesa "Sí, Señor Oscuro" a formato digital. Mi rol era diseñar todas las cartas ilustradas del juego, cada una con un rol diferente, manteniendo la esencia y estética del juego original.',
          'Adapt the board game "Yes, Dark Lord" to digital format. My role was to design all the illustrated cards of the game, each with a different role, maintaining the essence and aesthetics of the original game.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Colaboré estrechamente con el equipo para entender la esencia del juego original. Diseñé en Photoshop las cartas con iconografía clara y colores diferenciados para cada rol, asegurando que la estética del juego de mesa se mantuviera en la versión digital.',
          'I collaborated closely with the team to understand the essence of the original game. I designed the cards in Photoshop with clear iconography and differentiated colors for each role, ensuring the board game aesthetics were maintained in the digital version.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Aprendí a adaptar un juego de mesa a formato digital, mejoré mis habilidades de ilustración de cartas y comprendí cómo mantener la esencia del juego original en una nueva plataforma. También mejoré mi trabajo en equipo usando metodologías ágiles y herramientas de gestión.',
          'I learned to adapt a board game to digital format, improved my card illustration skills and understood how to maintain the essence of the original game on a new platform. I also improved my teamwork using agile methodologies and management tools.'
        ),
      },
    ],
    skillGains: [
      localizedText('Ilustración de cartas', 'Card illustration'),
      localizedText('Adaptación de juegos de mesa', 'Board game adaptation'),
      localizedText('Metodologías ágiles (Scrum)', 'Agile methodologies (Scrum)'),
      localizedText('Herramientas de gestión (Jira, Miro)', 'Management tools (Jira, Miro)'),
    ],
    tags: ['Ilustración', 'Game Design', 'Scrum', 'Jira'],
    subjects: ['Proceso de Desarrollo de Videojuegos'],
    coverImage: '/images/projects/2022-23/proceso-de-desarrollo-de-videojuegos/si-senor-oscuro/siseñoroscuro_portada.png',
    galleryImages: [
      '/images/projects/2022-23/proceso-de-desarrollo-de-videojuegos/si-senor-oscuro/siseñoroscuro1.png',
      '/images/projects/2022-23/proceso-de-desarrollo-de-videojuegos/si-senor-oscuro/siseñoroscuro2.png',
      '/images/projects/2022-23/proceso-de-desarrollo-de-videojuegos/si-senor-oscuro/siseñoroscuro3.png',
      '/images/projects/2022-23/proceso-de-desarrollo-de-videojuegos/si-senor-oscuro/siseñoroscuro4.png',
      '/images/projects/2022-23/proceso-de-desarrollo-de-videojuegos/si-senor-oscuro/siseñoroscuro5.png',
      '/images/projects/2022-23/proceso-de-desarrollo-de-videojuegos/si-senor-oscuro/siseñoroscuro6.png',
      '/images/projects/2022-23/proceso-de-desarrollo-de-videojuegos/si-senor-oscuro/siseñoroscuro7.png',
      '/images/projects/2022-23/proceso-de-desarrollo-de-videojuegos/si-senor-oscuro/siseñoroscuro8.png',
      '/images/projects/2022-23/proceso-de-desarrollo-de-videojuegos/si-senor-oscuro/siseñoroscuro9.png',
      '/images/projects/2022-23/proceso-de-desarrollo-de-videojuegos/si-senor-oscuro/siseñoroscuro10.png',
    ],
    galleryConfig: { columns: 5, layout: 'masonry' },
    featured: false,
    role: 'Ilustrador y diseñador de cartas',
    team: 'Proyecto académico grupal - 6 personas',
    duration: '2 meses',
    learnings: 'Aprendí a adaptar un juego de mesa a formato digital. Mejoré mis habilidades de ilustración de cartas. Descubrí cómo mantener la esencia del juego original en una nueva plataforma.',
    status: 'completado',
    technologies: [
      { name: 'Photoshop', level: 'principal' },
      { name: 'Jira', level: 'secundaria' },
      { name: 'Miro', level: 'experimental' },
    ],
    disciplines: ['diseño-2d', 'ilustracion'],
  };
