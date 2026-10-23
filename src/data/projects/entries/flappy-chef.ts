// src/data/projects/entries/flappy-chef.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2024-25/desarrollo-de-aplicaciones-para-dispositivos-moviles/flappy-chef';

export const flappyChef: ProjectInput = {
    slug: 'flappy-chef',
    year: 2025,
    academicYear: '2024-25',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'FlappyChef',
    description: 'Juego Android en equipo que se controla con el movimiento del móvil: un chef esquiva platos, tenedores y fuego. Usa la cámara para tomar una foto, el micrófono para soplar, potenciadores y un tema que cambia según la hora.',
    challenges: 'Integrar el micrófono, los sensores del móvil y la rotoscopia en un juego, y empezar a desarrollar en Android.',
    solution: 'El juego combina el control por movimiento del dispositivo con la cámara y el micrófono como parte de la jugabilidad. Mi parte fue la programación, la lógica y el diseño, repartidos con el resto del equipo.',
    highlights: [
      localizedText('📱 Control por movimiento del móvil', '📱 Control by moving the phone'),
      localizedText('📸 Foto con la cámara dentro del juego', '📸 In-game photo taken with the camera'),
      localizedText('🎤 Soplar al micrófono', '🎤 Blowing into the microphone'),
      localizedText('🌞🌙 Tema según la hora del día', '🌞🌙 Theme based on the time of day'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto grupal de la asignatura Desarrollo de Aplicaciones para Dispositivos Móviles (2024-25), hecho con Kotlin, Jetpack Compose y Android Studio.',
          'Group project for the Mobile Application Development course (2024-25), built with Kotlin, Jetpack Compose and Android Studio.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Hacer un juego Android inspirado en Flappy Bird que aproveche el hardware del móvil: el chef se mueve con los movimientos del dispositivo y esquiva platos, tenedores y fuego.',
          'Make an Android game inspired by Flappy Bird that makes use of the phone\'s hardware: the chef moves with the device\'s motion and dodges plates, forks and fire.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'El juego incluye foto con la cámara, soplar al micrófono, potenciadores y un tema que cambia según la hora. Participé en la programación, la lógica del juego y el diseño junto al resto del equipo.',
          'The game includes a photo taken with the camera, blowing into the microphone, power-ups and a theme that changes with the time of day. I took part in the programming, game logic and design together with the rest of the team.'
        ),
      },
      {
        kind: 'learning',
        icon: 'bolt',
        text: localizedText(
          'Lo más difícil fue integrar el micrófono, los sensores y la rotoscopia en el juego.',
          'The hardest part was integrating the microphone, the sensors and rotoscoping into the game.'
        ),
      },
    ],
    skillGains: [
      localizedText('Desarrollo Android con Kotlin', 'Android development with Kotlin'),
      localizedText('Jetpack Compose', 'Jetpack Compose'),
      localizedText('Cámara, micrófono y sensores de movimiento', 'Camera, microphone and motion sensors'),
    ],
    tags: ['Kotlin', 'Android', 'Jetpack Compose'],
    subjects: ['Desarrollo de Aplicaciones para Dispositivos Móviles'],
    disciplines: ['aplicaciones', 'videojuegos'],
    technologies: [
      { name: 'Android Studio', level: 'principal' },
      { name: 'Kotlin', level: 'principal' },
      { name: 'Jetpack Compose', level: 'principal' },
    ],
    featured: false,
    status: 'completado',
    coverImage: `${BASE}/flappychef_portada.jpg`,
    gallery: [
      { type: 'image', src: `${BASE}/flappychef1.webp`, alt: 'Logotipo de FlappyChef en letras naranjas' },
      { type: 'image', src: `${BASE}/flappychef2.webp`, alt: 'Captura de FlappyChef' },
      { type: 'image', src: `${BASE}/flappychef3.webp`, alt: 'Captura de FlappyChef' },
      { type: 'image', src: `${BASE}/flappychef4.webp`, alt: 'Captura de FlappyChef' },
      { type: 'image', src: `${BASE}/flappychef5.webp`, alt: 'Captura de FlappyChef' },
      { type: 'image', src: `${BASE}/flappychef6.webp`, alt: 'Partida de FlappyChef en un escenario de cafetería' },
      { type: 'image', src: `${BASE}/flappychef7.webp`, alt: 'Captura de FlappyChef' },
      { type: 'image', src: `${BASE}/flappychef8.webp`, alt: 'Captura de FlappyChef' },
      { type: 'image', src: `${BASE}/flappychef9.webp`, alt: 'Captura de FlappyChef' },
      { type: 'image', src: `${BASE}/flappychef10.webp`, alt: 'Captura de FlappyChef' },
    ],
    galleryConfig: { columns: 4, layout: 'masonry' },
    resources: [
      { type: 'link', url: 'https://mrdanieloo.itch.io/flappychef', title: 'Jugar' },
    ],
    role: 'Desarrollador (programación, lógica y diseño en equipo)',
    team: 'Proyecto académico grupal - 4 personas',
    duration: '2.5 meses',
    learnings: 'Integrar el micrófono, los sensores y la rotoscopia en el juego fue lo más difícil.',
  };
