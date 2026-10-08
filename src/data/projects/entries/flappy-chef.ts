// src/data/projects/entries/flappy-chef.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const flappyChef: ProjectInput = {
    slug: 'flappy-chef',
    year: 2025,
    academicYear: '2024-25',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'FlappyChef',
    description: 'Videojuego móvil Android inspirado en Flappy Bird. Controla a un chef volador usando cámara, micrófono y acelerómetro. Personaliza el personaje con tu propia foto y apaga el fuego soplando al micrófono.',
    challenges: 'Integrar sensores del dispositivo móvil (cámara, micrófono, acelerómetro) en la jugabilidad. Aprender Android Studio y Kotlin desde cero.',
    solution: 'Desarrollamos un sistema de eventos que captura los datos de los sensores en tiempo real y los traduce en acciones dentro del juego. Optimizamos el rendimiento para dispositivos de gama baja.',
    highlights: [
      localizedText('📸 Hazte una foto y conviértete en el chef', '📸 Take a photo and become the chef'),
      localizedText('🎤 Sopla para apagar el fuego', '🎤 Blow to extinguish the fire'),
      localizedText('📱 Control por inclinación (acelerómetro)', '📱 Tilt control (accelerometer)'),
      localizedText('🌞🌙 Fondo dinámico según la hora del día', '🌞🌙 Dynamic background based on time of day'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto desarrollado para la asignatura Desarrollo de Aplicaciones para Dispositivos Móviles. Aprendimos a usar Android Studio y Jetpack Compose desde cero, creando una experiencia móvil completa.',
          'Project developed for the Mobile Application Development course. We learned to use Android Studio and Jetpack Compose from scratch, creating a complete mobile experience.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'El objetivo era crear un juego móvil que aprovechara al máximo los sensores del dispositivo: cámara, micrófono y acelerómetro, ofreciendo una experiencia única que no se puede replicar en PC.',
          'The goal was to create a mobile game that made the most of the device sensors: camera, microphone and accelerometer, offering a unique experience that cannot be replicated on PC.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Implementé un sistema que permite al jugador hacerse una foto para personalizar el personaje, controlar el movimiento inclinando el móvil, y soplar al micrófono para apagar fuegos. Todo integrado en un juego tipo Flappy Bird con temática de cocina.',
          'I implemented a system that allows the player to take a photo to customize the character, control movement by tilting the phone, and blow into the microphone to extinguish fires. All integrated into a Flappy Bird-style game with a cooking theme.'
        ),
      },
      {
        kind: 'learning',
        icon: 'bolt',
        text: localizedText(
          'Aprendí a desarrollar para Android con Kotlin y Jetpack Compose, a integrar sensores nativos en la jugabilidad y a optimizar el rendimiento para diferentes dispositivos. Descubrí los desafíos de adaptar una experiencia a diferentes pantallas.',
          'I learned to develop for Android with Kotlin and Jetpack Compose, to integrate native sensors into gameplay and to optimize performance for different devices. I discovered the challenges of adapting an experience to different screens.'
        ),
      },
    ],
    skillGains: [
      localizedText('Desarrollo Android con Kotlin', 'Android development with Kotlin'),
      localizedText('Jetpack Compose', 'Jetpack Compose'),
      localizedText('Integración de sensores móviles', 'Mobile sensor integration'),
      localizedText('Optimización para dispositivos móviles', 'Mobile device optimization'),
    ],
    tags: ['Kotlin', 'Android', 'Jetpack Compose'],
    subjects: ['Desarrollo de Aplicaciones para Dispositivos Móviles'],
    coverImage: '/images/projects/2024-25/desarrollo-de-aplicaciones-para-dispositivos-moviles/flappy-chef/flappychef_portada.png',
    galleryImages: [
      '/images/projects/2024-25/desarrollo-de-aplicaciones-para-dispositivos-moviles/flappy-chef/flappychef1.png',
      '/images/projects/2024-25/desarrollo-de-aplicaciones-para-dispositivos-moviles/flappy-chef/flappychef2.png',
      '/images/projects/2024-25/desarrollo-de-aplicaciones-para-dispositivos-moviles/flappy-chef/flappychef3.png',
      '/images/projects/2024-25/desarrollo-de-aplicaciones-para-dispositivos-moviles/flappy-chef/flappychef4.png',
      '/images/projects/2024-25/desarrollo-de-aplicaciones-para-dispositivos-moviles/flappy-chef/flappychef5.png',
      '/images/projects/2024-25/desarrollo-de-aplicaciones-para-dispositivos-moviles/flappy-chef/flappychef6.png',
      '/images/projects/2024-25/desarrollo-de-aplicaciones-para-dispositivos-moviles/flappy-chef/flappychef7.png',
      '/images/projects/2024-25/desarrollo-de-aplicaciones-para-dispositivos-moviles/flappy-chef/flappychef8.png',
      '/images/projects/2024-25/desarrollo-de-aplicaciones-para-dispositivos-moviles/flappy-chef/flappychef9.png',
      '/images/projects/2024-25/desarrollo-de-aplicaciones-para-dispositivos-moviles/flappy-chef/flappychef10.png',
    ],
    galleryConfig: { columns: 4, layout: 'masonry' },
    featured: false,
    links: [
      { label: 'Jugar', url: 'https://mrdanieloo.itch.io/flappychef' },
    ],
    role: 'Desarrollador de aplicaciones para Android',
    team: 'Proyecto académico grupal - 4 personas',
    duration: '2.5 meses',
    learnings: 'Me adentré en el desarrollo móvil con Kotlin y Jetpack Compose. Aprendí a integrar sensores nativos en la jugabilidad. Descubrí los desafíos de adaptar una experiencia a diferentes pantallas.',
    status: 'completado',
    technologies: [
      { name: 'Android Studio', level: 'principal' },
      { name: 'Kotlin', level: 'principal' },
      { name: 'Java', level: 'secundaria' },
      { name: 'Jetpack Compose', level: 'principal' },
    ],
    disciplines: ['aplicaciones', 'videojuegos'],
  };
