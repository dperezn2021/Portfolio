// src/data/projects/entries/alien-rush.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const alienRush: ProjectInput = {
    slug: 'alien-rush',
    year: 2025,
    academicYear: '2024-25',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'AlienRush',
    description: 'Juego competitivo en red donde 2 jugadores compiten 1vs1. Arquitectura cliente-servidor con servidor central que comunica mediante paso de mensajes a los jugadores.',
    challenges: 'Sincronización en tiempo real entre dos jugadores. Gestión de latencia y desync en partidas online.',
    solution: 'Implementamos un sistema de predicción de movimiento y corrección de errores mediante interpolación. Usamos WebRTC para reducir la latencia y sincronizamos el estado del juego con un servidor central que valida todas las acciones.',
    highlights: [
      localizedText('🎯 Sistema de lobbies', '🎯 Lobby system'),
      localizedText('💬 Chat privado entre sesiones', '💬 Private match chat'),
      localizedText('🔐 Sistema de cuentas de usuario', '🔐 User account system'),
      localizedText('🔄 Sincronización en tiempo real', '🔄 Real-time synchronization'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto desarrollado en segundo curso dentro de la asignatura Juegos en Red. El recorrido empezó con una versión multijugador local y terminó con una migración real a arquitectura cliente-servidor.',
          'Project developed during the second year in the Network Games course. The process started with a local multiplayer version and ended with a real migration to a client-server architecture.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'El objetivo era conseguir un videojuego 1vs1 funcional, primero en local y después online, con gestión estable de partida, usuarios, lobbies y comunicación en tiempo real.',
          'The goal was to deliver a functional 1v1 game, first locally and then online, with stable match flow, users, lobbies, and real-time communication.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Para lograrlo fue necesario aprender API REST con operaciones POST, PUT y DELETE, trabajar con paso de mensajes, validar acciones desde servidor central e integrar cuentas de usuario, salas y sincronización de estado.',
          'To achieve it, we had to learn REST APIs with POST, PUT, and DELETE operations, work with message passing, validate actions from a central server, and integrate user accounts, lobbies, and state synchronization.'
        ),
      },
      {
        kind: 'learning',
        icon: 'bolt',
        text: localizedText(
          'Este proyecto consolidó mis bases en cliente-servidor, latencia, autoridad de servidor y diseño de flujos multijugador reales, además de enseñarme a modular backend y frontend para un juego conectado.',
          'This project strengthened my foundations in client-server systems, latency, server authority, and real multiplayer flow design, while teaching me how to modularize backend and frontend for a connected game.'
        ),
      },
    ],
    skillGains: [
      localizedText('Diseño de API REST', 'REST API design'),
      localizedText('Arquitectura cliente-servidor', 'Client-server architecture'),
      localizedText('Paso de mensajes en tiempo real', 'Real-time message passing'),
      localizedText('Cuentas de usuario y lobbies', 'User accounts and lobbies'),
    ],
    tags: ['JS', 'Phaser3', 'API REST'],
    subjects: ['Juegos en Red'],
    publicable: true,
    coverImage: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush_portada.png',
    cover: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush_portada.png',
    galleryImages: [
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush1.png',
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush2.png',
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush3.png',
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush4.png',
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush5.png',
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush6.png',
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush7.png',
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush8.png',
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush9.png',
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush10.png',
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush11.png',
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush12.png',
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush13.png',
      '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush14.png',
    ],
    gallery: [
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush1.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush2.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush3.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush4.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush5.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush6.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush7.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush8.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush9.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush10.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush11.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush12.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush13.png' },
      { type: 'image', src: '/images/projects/2024-25/juegos-en-red/alien-rush/alienrush14.png' },
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    featured: false,
    links: [
      { label: 'Jugar', url: 'https://gg-team.itch.io/alien-rush' },
      { label: 'GitHub', url: 'https://github.com/dperezn2021/AlienRush' },
      { label: 'Vídeo Explicativo', url: 'https://www.youtube.com/watch?v=_1vSrSVZz-w' },
    ],
    externalLinks: [
      { label: 'Jugar', url: 'https://gg-team.itch.io/alien-rush' },
      { label: 'GitHub', url: 'https://github.com/dperezn2021/AlienRush' },
      { label: 'Vídeo Explicativo', url: 'https://www.youtube.com/watch?v=_1vSrSVZz-w' },
    ],
    role: 'Desarrollador Full Stack',
    team: 'GG Team - 4 personas',
    duration: '5 meses',
    learnings: 'Aprendí a gestionar la sincronización en tiempo real y a manejar la latencia en partidas online. Me familiaricé con la arquitectura cliente-servidor y el paso de mensajes en red.',
    status: 'completado',
    technologies: [
      { name: 'JavaScript', level: 'principal' },
      { name: 'Phaser3', level: 'principal' },
      { name: 'SpringBoot', level: 'principal' },
      { name: 'Socket', level: 'secundaria' },
    ],
    disciplines: ['videojuegos', 'red', 'desarrollo-web'],
  };
