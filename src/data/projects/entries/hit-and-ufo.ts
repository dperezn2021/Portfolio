// src/data/projects/entries/hit-and-ufo.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const hitAndUfo: ProjectInput = {
    slug: 'hit-and-ufo',
    year: 2024,
    academicYear: '2023-24',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'HittAndUfo',
    description: 'Juego competitivo en red inspirado en la rivalidad entre fuerza e inteligencia. Versión local en navegador y versión en línea con arquitectura cliente-servidor. Primer contacto con juegos en red.',
    challenges: 'Implementar comunicación en tiempo real entre clientes. Sincronizar el estado del juego entre jugadores en un proyecto de iniciación a juegos en red.',
    solution: 'Implementé un sistema de comunicación basado en eventos que permite la sincronización entre clientes. Utilicé Phaser3 para el frontend y Socket.io para la comunicación en tiempo real.',
    highlights: [
      localizedText('⚔️ Competitivo 1vs1 en tiempo real', '⚔️ Real-time 1v1 competitive mode'),
      localizedText('🏠 Versión local en navegador', '🏠 Local browser version'),
      localizedText('🌐 Versión online con arquitectura cliente-servidor', '🌐 Online version with client-server architecture'),
      localizedText('📚 Primer contacto con juegos en red', '📚 First contact with networked games'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Primer proyecto de la asignatura Juegos en Red. Fue mi primer contacto con el desarrollo de videojuegos multijugador, donde aprendí los fundamentos de Phaser3 y Socket.io.',
          'First project of the Network Games course. It was my first contact with multiplayer video game development, where I learned the fundamentals of Phaser3 and Socket.io.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear un juego competitivo 1vs1 funcional, primero en local y después migrarlo a una versión online con arquitectura cliente-servidor, entendiendo los fundamentos de la comunicación en red.',
          'Create a functional 1v1 competitive game, first locally and then migrate it to an online version with client-server architecture, understanding the fundamentals of network communication.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Desarrollé el juego usando Phaser3 para el frontend y Socket.io para la comunicación en tiempo real. Implementé un sistema de eventos que permite la sincronización del estado del juego entre clientes.',
          'I developed the game using Phaser3 for the frontend and Socket.io for real-time communication. I implemented an event-based system that allows game state synchronization between clients.'
        ),
      },
      {
        kind: 'learning',
        icon: 'bolt',
        text: localizedText(
          'Este proyecto sentó las bases para mi desarrollo en juegos en red. Aprendí los fundamentos de Phaser3, Socket.io y la arquitectura cliente-servidor, que luego aplicaría en proyectos más avanzados como AlienRush.',
          'This project laid the foundations for my development in networked games. I learned the fundamentals of Phaser3, Socket.io and client-server architecture, which I would later apply in more advanced projects like AlienRush.'
        ),
      },
    ],
    skillGains: [
      localizedText('Phaser3 (fundamentos)', 'Phaser3 (fundamentals)'),
      localizedText('Socket.io', 'Socket.io'),
      localizedText('Arquitectura cliente-servidor básica', 'Basic client-server architecture'),
      localizedText('Comunicación en tiempo real', 'Real-time communication'),
    ],
    tags: ['JS', 'Phaser3', 'Socket.io'],
    subjects: ['Juegos en Red'],
    coverImage: '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo_portada.png',
    galleryImages: [
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo1.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo2.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo4.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo5.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo6.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo7.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo8.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo9.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo10.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo11.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo12.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo13.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo14.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo15.png',
      '/images/projects/2023-24/juegos-en-red/hit-and-ufo/hittandufo16.png',
    ],
    galleryConfig: { columns: 4, gap: 'small', imageSize: 'small', aspectRatio: 'auto', layout: 'masonry' },
    featured: false,
    links: [
      { label: 'Jugar', url: 'https://gg-team.itch.io/hitt-and-ufo' },
      { label: 'GitHub', url: 'https://github.com/dperezn2021/HittAndUfo' },
    ],
    role: 'Desarrollador Full Stack',
    team: 'GG Team - 4 personas',
    duration: '3 meses',
    learnings: 'Mejoré mis habilidades en comunicación en tiempo real. Aprendí a gestionar el estado del juego entre múltiples clientes. Descubrí los desafíos del desarrollo de juegos competitivos.',
    status: 'completado',
    technologies: [
      { name: 'JavaScript', level: 'principal' },
      { name: 'Phaser3', level: 'principal' },
      { name: 'Socket', level: 'secundaria' },
    ],
    disciplines: ['videojuegos', 'red'],
  };
