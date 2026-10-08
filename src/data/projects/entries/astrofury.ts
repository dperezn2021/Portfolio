// src/data/projects/entries/astrofury.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const astrofury: ProjectInput = {
    slug: 'astrofury',
    year: 2025,
    academicYear: '2023-24',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Astrofury',
    description: 'Sobrevive a oleadas de enemigos espaciales mientras el equipo de ingeniería te ayuda en tu aventura. Implementa patrones de diseño como State, Object Pooling, Flyweight, Singleton y Observer, entre otros.',
    challenges: 'Implementar correctamente múltiples patrones de diseño en un proyecto cohesionado. Balancear la dificultad de las oleadas de enemigos.',
    solution: 'Organizamos el proyecto en módulos independientes y aplicamos los patrones de diseño de forma progresiva.',
    highlights: [
      localizedText('🧠 Uso aplicado de patrones de diseño', '🧠 Applied use of design patterns'),
      localizedText('⚔️ Sistema de oleadas con dificultad progresiva', '⚔️ Wave system with progressive difficulty'),
      localizedText('🔫 Sistema de armas y mejoras', '🔫 Weapons and upgrades system'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto desarrollado para la asignatura Ingeniería de Videojuegos, orientado a construir un videojuego final en el que los patrones de diseño vistos en clase no fueran teoría, sino decisiones reales de arquitectura.',
          'Project developed for the Video Game Engineering course, focused on building a final game where the design patterns studied in class were not just theory, but real architectural decisions.'
        ),
      },
      {
        kind: 'objective',
        icon: 'target',
        text: localizedText(
          'El desafío principal era entregar un producto jugable y ordenado en el que varios patrones de diseño convivieran con sentido y mejoraran tanto estructura como rendimiento.',
          'The main challenge was to deliver a playable and well-structured product in which several design patterns worked together meaningfully and improved both structure and performance.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'hub',
        text: localizedText(
          'Aplicamos patrones como State, Object Pooling y Observer, entre otros, para separar responsabilidades, controlar estados del juego y optimizar la reutilización de objetos durante las oleadas y el combate.',
          'We applied patterns such as State, Object Pooling, and Observer, among others, to separate responsibilities, control game states, and optimize object reuse during waves and combat.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Aprendí que modularizar bien el código facilita mantener scripts claros, escalar mecánicas y mejorar rendimiento. También entendí cómo implementar patrones ya definidos produce resultados más sólidos en un videojuego real.',
          'I learned that strong code modularization makes scripts easier to maintain, mechanics easier to scale, and performance easier to optimize. I also saw how implementing established patterns leads to more solid results in a real game.'
        ),
      },
    ],
    skillGains: [
      localizedText('Patrones de diseño en gameplay', 'Design patterns in gameplay'),
      localizedText('Modularización de código', 'Code modularization'),
      localizedText('Optimización con object pooling', 'Optimization with object pooling'),
      localizedText('Arquitectura de sistemas en Unity', 'Systems architecture in Unity'),
    ],
    tags: ['Unity', 'C#', 'Patrones de diseño'],
    subjects: ['Ingeniería de Videojuegos'],
    coverImage: '/images/projects/2023-24/ingenieria-de-videojuegos/astrofury/astrofury_portada.png',
    galleryImages: [
      '/images/projects/2023-24/ingenieria-de-videojuegos/astrofury/astrofury1.png',
      '/images/projects/2023-24/ingenieria-de-videojuegos/astrofury/astrofury2.png',
      '/images/projects/2023-24/ingenieria-de-videojuegos/astrofury/astrofury3.png',
      '/images/projects/2023-24/ingenieria-de-videojuegos/astrofury/astrofury4.png',
      '/images/projects/2023-24/ingenieria-de-videojuegos/astrofury/astrofury5.png',
      '/images/projects/2023-24/ingenieria-de-videojuegos/astrofury/astrofury6.png',
      '/images/projects/2023-24/ingenieria-de-videojuegos/astrofury/astrofury7.png',
      '/images/projects/2023-24/ingenieria-de-videojuegos/astrofury/astrofury8.png',
      '/images/projects/2023-24/ingenieria-de-videojuegos/astrofury/astrofury9.png',
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    featured: false,
    links: [
      { label: 'Jugar', url: 'https://tokpary.itch.io/astrofury' }
    ],
    role: 'Programador y diseñador de sistemas',
    team: 'EquipoT - 4 personas',
    duration: '4 meses',
    learnings: 'Aprendí a implementar patrones de diseño como State, Object Pooling y Observer. Mejoré mis habilidades en Unity y C#. Descubrí la importancia de la optimización de rendimiento.',
    status: 'completado',
    technologies: [
      { name: 'Unity', level: 'principal' },
      { name: 'C#', level: 'principal' },
      { name: 'itch.io', level: 'secundaria' },
    ],
    disciplines: ['videojuegos', 'devops'],
  };
