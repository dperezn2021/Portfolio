// src/data/projects/entries/alien-rush.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2024-25/juegos-en-red/alien-rush';

export const alienRush: ProjectInput = {
    slug: 'alien-rush',
    year: 2025,
    academicYear: '2024-25',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'AlienRush',
    description: 'Videojuego en red 1 contra 1, desarrollado en equipo para Juegos en Red. Dos naves compiten en vista cenital por abducir más humanos, con 5 vidas por jugador, y el juego incluye registro, inicio de sesión, chat y lobbies.',
    challenges: 'La comunicación entre los clientes de los dos jugadores y la integración del trabajo de todo el equipo.',
    solution: 'El equipo construyó un juego con cuentas de usuario, lobbies y chat, que avisa al jugador cuando el servidor no está disponible. Mi parte fue la programación y la integración dentro del equipo.',
    highlights: [
      localizedText('🛸 Duelo cenital entre dos naves por abducir humanos', '🛸 Top-down duel between two ships abducting humans'),
      localizedText('🐄 Humanos, vacas, superhumanos con mejoras y chatarra', '🐄 Humans, cows, super-humans with power-ups and scrap'),
      localizedText('🔐 Registro, inicio de sesión y lobbies', '🔐 Registration, login and lobbies'),
      localizedText('💬 Chat y aviso de servidor caído', '💬 Chat and server-down notice'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto grupal de la asignatura Juegos en Red (2024-25), desarrollado por GG Team, un equipo de 4 personas.',
          'Group project for the Network Games course (2024-25), developed by GG Team, a team of 4.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear un juego competitivo para dos jugadores conectados en red: dos naves recorren el mapa y gana quien abduce más humanos, con 5 vidas para cada jugador.',
          'Build a competitive game for two networked players: two ships fly over the map and whoever abducts more humans wins, with 5 lives per player.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'En el mapa hay humanos, vacas, superhumanos que dan mejoras y chatarra. Alrededor de la partida, el juego ofrece registro, inicio de sesión, chat, lobbies y un aviso cuando el servidor cae. Participé en la programación y en la integración de los módulos del equipo.',
          'The map contains humans, cows, super-humans that grant power-ups, and scrap. Around the match, the game offers registration, login, chat, lobbies and a notice when the server goes down. I took part in programming and in integrating the team\'s modules.'
        ),
      },
      {
        kind: 'learning',
        icon: 'bolt',
        text: localizedText(
          'Lo más difícil fue la comunicación entre los clientes y juntar las partes de cada miembro del equipo en un único juego funcional.',
          'The hardest parts were client-to-client communication and putting each team member\'s parts together into a single working game.'
        ),
      },
    ],
    skillGains: [
      localizedText('Comunicación entre clientes en un juego en red', 'Client communication in a networked game'),
      localizedText('Integración de módulos en equipo', 'Team module integration'),
      localizedText('Cuentas de usuario, chat y lobbies', 'User accounts, chat and lobbies'),
    ],
    tags: ['JS', 'Phaser3', 'API REST'],
    subjects: ['Juegos en Red'],
    disciplines: ['videojuegos', 'red', 'desarrollo-web'],
    technologies: [
      { name: 'JavaScript', level: 'principal' },
      { name: 'Phaser3', level: 'principal' },
      { name: 'SpringBoot', level: 'principal' },
      { name: 'Socket', level: 'secundaria' },
    ],
    publicable: true,
    featured: false,
    status: 'completado',
    coverImage: `${BASE}/alienrush_portada.png`,
    cover: `${BASE}/alienrush_portada.png`,
    gallery: [
      { type: 'image', src: `${BASE}/alienrush1.png`, alt: 'Logotipo de AlienRush: un platillo volante con el título del juego' },
      { type: 'image', src: `${BASE}/alienrush2.png`, alt: 'Captura de AlienRush' },
      { type: 'image', src: `${BASE}/alienrush3.png`, alt: 'Captura de AlienRush' },
      { type: 'image', src: `${BASE}/alienrush4.png`, alt: 'Captura de AlienRush' },
      { type: 'image', src: `${BASE}/alienrush5.png`, alt: 'Captura de AlienRush' },
      { type: 'image', src: `${BASE}/alienrush6.png`, alt: 'Captura de AlienRush' },
      { type: 'image', src: `${BASE}/alienrush7.png`, alt: 'Captura de AlienRush' },
      { type: 'image', src: `${BASE}/alienrush8.png`, alt: 'Menú de pausa de AlienRush sobre una partida con las dos naves y sus joysticks táctiles' },
      { type: 'image', src: `${BASE}/alienrush9.png`, alt: 'Captura de AlienRush' },
      { type: 'image', src: `${BASE}/alienrush10.png`, alt: 'Captura de AlienRush' },
      { type: 'image', src: `${BASE}/alienrush11.png`, alt: 'Captura de AlienRush' },
      { type: 'image', src: `${BASE}/alienrush12.png`, alt: 'Captura de AlienRush' },
      { type: 'image', src: `${BASE}/alienrush13.png`, alt: 'Ilustración de AlienRush: un platillo volante abduciendo sobre un bosque nocturno' },
      { type: 'image', src: `${BASE}/alienrush14.png`, alt: 'Captura de AlienRush' },
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    resources: [
      { type: 'link', url: 'https://gg-team.itch.io/alien-rush', title: 'Jugar' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=_1vSrSVZz-w', title: 'Vídeo Explicativo' },
      { type: 'link', url: 'https://github.com/dperezn2021/AlienRush', title: 'Código en GitHub' },
    ],
    role: 'Desarrollador (programación e integración en equipo)',
    team: 'GG Team - 4 personas',
    duration: '5 meses',
    learnings: 'La comunicación entre clientes y la integración del trabajo de todo el equipo fueron lo más exigente del proyecto.',
  };
