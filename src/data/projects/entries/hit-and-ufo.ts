// src/data/projects/entries/hit-and-ufo.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const media = '/images/projects/2023-24/juegos-en-red/hit-and-ufo';
const shot = (n: number, alt: string) => ({ type: 'image' as const, src: `${media}/hittandufo${n}.webp`, alt });

export const hitAndUfo: ProjectInput = {
    slug: 'hit-and-ufo',
    year: 2024,
    academicYear: '2023-24',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'HittAndUfo',
    description: 'Carrera de plataformas 2D en red entre Hitt, fuerte pero lento, y un UFO pequeño y ágil. Cliente en Phaser 3 y servidor en Java con Spring Boot. Yo diseñé y programé el nivel y el tutorial e integré los assets.',
    challenges: 'Sincronizar el movimiento y los power-ups entre jugadores y definir un flujo claro de login y lobby.',
    solution: 'Mi parte fue el diseño y la programación del nivel y del tutorial, y la integración de los assets. Las cuentas y el lobby funcionaban; la sincronización de movimientos y power-ups no llegó a funcionar correctamente.',
    highlights: [
      localizedText('🏁 Carrera de plataformas 2D entre dos personajes con rasgos opuestos', '🏁 2D platformer race between two characters with opposite traits'),
      localizedText('🗺️ Diseño y programación del nivel y del tutorial', '🗺️ Level and tutorial design and programming'),
      localizedText('🔐 Cuentas de usuario y lobby funcionando', '🔐 Working user accounts and lobby'),
      localizedText('🌐 Cliente Phaser 3 y servidor Java con Spring Boot', '🌐 Phaser 3 client and Java Spring Boot server'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Primer proyecto de la asignatura Juegos en Red, en equipo de cuatro personas (GG Team) y mi primer contacto con un juego multijugador.',
          'First project of the Network Games course, in a four-person team (GG Team) and my first contact with a multiplayer game.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear una carrera de plataformas 2D entre Hitt, un personaje fuerte pero lento, y un UFO pequeño y ágil, con cuentas de usuario y lobby para jugar en red.',
          'Create a 2D platformer race between Hitt, a strong but slow character, and a small, agile UFO, with user accounts and a lobby for online play.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'El cliente está hecho con Phaser 3, JavaScript y HTML, y el servidor con Java y Spring Boot. Las cuentas y el lobby funcionaban, pero la sincronización de movimientos y power-ups seguía fallando. Yo diseñé y programé el nivel y el tutorial e integré los assets en el juego.',
          'The client is built with Phaser 3, JavaScript and HTML, and the server with Java and Spring Boot. Accounts and the lobby worked, but movement and power-up synchronization kept failing. I designed and programmed the level and the tutorial and integrated the assets into the game.'
        ),
      },
      {
        kind: 'learning',
        icon: 'bolt',
        text: localizedText(
          'Las mayores dificultades fueron la sincronización entre jugadores y un flujo de login y lobby que no estaba bien definido desde el principio.',
          'The biggest difficulties were synchronization between players and a login and lobby flow that was not well defined from the start.'
        ),
      },
    ],
    skillGains: [
      localizedText('Phaser 3 y JavaScript', 'Phaser 3 and JavaScript'),
      localizedText('Diseño y programación de niveles y tutoriales', 'Level and tutorial design and programming'),
      localizedText('Integración de assets', 'Asset integration'),
      localizedText('Primer contacto con arquitectura cliente-servidor', 'First contact with client-server architecture'),
    ],
    en: {
      title: 'HittAndUfo',
      description: '2D online platformer race between Hitt, strong but slow, and a small, agile UFO. Phaser 3 client and a Java Spring Boot server. I designed and programmed the level and the tutorial and integrated the assets.',
      challenges: 'Synchronizing movement and power-ups between players and defining a clear login and lobby flow.',
      solution: 'My part was designing and programming the level and the tutorial, and integrating the assets. Accounts and the lobby worked; movement and power-up synchronization never worked properly.',
      role: 'Programmer and level designer',
      team: 'GG Team - 4 people',
      duration: '3 months',
      learnings: 'Synchronization between players and a poorly defined login and lobby flow were the project\'s biggest difficulties.',
    },
    tags: ['JS', 'Phaser3', 'Spring Boot'],
    subjects: ['Juegos en Red'],
    disciplines: ['videojuegos', 'red'],
    technologies: [
      { name: 'JavaScript', level: 'principal' },
      { name: 'Phaser3', level: 'principal' },
      { name: 'Java / Spring Boot', level: 'secundaria' },
    ],
    featured: false,
    status: 'completado',
    coverImage: `${media}/hittandufo_portada.jpg`,
    featuredMedia: {
      type: 'video',
      src: `${media}/demo-multijugador.mp4`,
      poster: `${media}/demo-multijugador-poster.jpg`,
      title: 'Demo con dos clientes en red local',
    },
    gallery: [
      shot(1, 'Captura de HittAndUfo (1)'),
      shot(2, 'Captura de HittAndUfo (2)'),
      shot(4, 'Captura de HittAndUfo (4)'),
      shot(5, 'Captura de HittAndUfo (5)'),
      shot(6, 'Captura de HittAndUfo (6)'),
      shot(7, 'Captura de HittAndUfo (7)'),
      shot(8, 'Captura de HittAndUfo (8)'),
      shot(9, 'Captura de HittAndUfo (9)'),
      shot(10, 'Captura de HittAndUfo (10)'),
      shot(11, 'Captura de HittAndUfo (11)'),
      shot(12, 'Captura de HittAndUfo (12)'),
      shot(13, 'Captura de HittAndUfo (13)'),
      shot(14, 'Captura de HittAndUfo (14)'),
      shot(15, 'Captura de HittAndUfo (15)'),
      shot(16, 'Captura de HittAndUfo (16)'),
    ],
    galleryConfig: { columns: 4, gap: 'small', imageSize: 'small', aspectRatio: 'auto', layout: 'masonry' },
    resources: [
      { type: 'link', url: 'https://gg-team.itch.io/hitt-and-ufo', title: 'Jugar' },
      { type: 'link', url: 'https://github.com/dperezn2021/HittAndUfo', title: 'GitHub' },
    ],
    role: 'Programador y diseñador de niveles',
    team: 'GG Team - 4 personas',
    duration: '3 meses',
    learnings: 'La sincronización entre jugadores y un flujo de login y lobby poco definido fueron las mayores dificultades del proyecto.',
  };
