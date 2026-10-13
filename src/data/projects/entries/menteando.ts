// src/data/projects/entries/menteando.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2025-26/tfg/menteando';

export const menteando: ProjectInput = {
    slug: 'menteando',
    year: 2026,
    academicYear: '2025-26',
    context: 'grado',
    type: 'Trabajo de Fin de Grado',
    title: 'Menteando',
    description: 'Trabajo de Fin de Grado individual, todavía en desarrollo: una plataforma web de entrenamiento cognitivo para adultos con tests, juegos, métricas de progreso, gamificación y un coach con IA.',
    challenges: 'Combinar la investigación sobre cognición con el desarrollo completo de la plataforma. De momento el progreso se guarda en el navegador con localStorage; el backend y la base de datos están planificados.',
    solution: 'Una web con perfiles, métricas por capacidad (atención, memoria, control y reflejos), medallas, rachas, exportación de datos y comentarios, con tests y juegos propios. Usa Tailwind, localStorage, EmailJS y Cloudflare Workers, además de Unity y C#.',
    highlights: [
      localizedText('🧪 Tests cognitivos y batería de juegos', '🧪 Cognitive tests and game battery'),
      localizedText('📊 Métricas por capacidad: atención, memoria, control y reflejos', '📊 Metrics per ability: attention, memory, control and reflexes'),
      localizedText('🏅 Medallas, rachas y puntos', '🏅 Badges, streaks and points'),
      localizedText('📱 Versión web usable también en el móvil', '📱 Web version that also works on mobile'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Trabajo de Fin de Grado individual (2025-26), todavía en desarrollo. La idea parte de la investigación sobre entrenamiento cognitivo en adultos.',
          'Individual Final Degree Project (2025-26), still in development. The idea comes from research on cognitive training in adults.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Construir una plataforma web de entrenamiento cognitivo para adultos que combine tests, juegos, métricas de progreso, gamificación y un coach con IA.',
          'Build a web cognitive-training platform for adults combining tests, games, progress metrics, gamification and an AI coach.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Todo el trabajo es individual: investigación, arquitectura, frontend, juegos, tests e integración. La web usa HTML, CSS, JavaScript y Tailwind, guarda el progreso en localStorage y emplea EmailJS y Cloudflare Workers, además de Unity y C#. Incluye perfiles, métricas, comentarios y exportación de datos.',
          'All the work is individual: research, architecture, frontend, games, tests and integration. The site uses HTML, CSS, JavaScript and Tailwind, stores progress in localStorage and uses EmailJS and Cloudflare Workers, as well as Unity and C#. It includes profiles, metrics, comments and data export.'
        ),
      },
      {
        kind: 'learning',
        icon: 'bolt',
        text: localizedText(
          'Lo más difícil ha sido la investigación sobre cognición y desarrollar la plataforma completa por mi cuenta. El proyecto sigue en marcha: el backend y la base de datos son el siguiente paso.',
          'The hardest parts have been researching cognition and building the whole platform on my own. The project is ongoing: the backend and database are the next step.'
        ),
      },
    ],
    skillGains: [
      localizedText('Desarrollo web con HTML, CSS, JavaScript y Tailwind', 'Web development with HTML, CSS, JavaScript and Tailwind'),
      localizedText('Persistencia en el navegador con localStorage', 'Browser persistence with localStorage'),
      localizedText('Diseño de tests y juegos cognitivos', 'Design of cognitive tests and games'),
      localizedText('Integración de EmailJS y Cloudflare Workers', 'EmailJS and Cloudflare Workers integration'),
    ],
    tags: ['Desarrollo Cognitivo', 'Gamificación', 'Web'],
    subjects: [],
    disciplines: ['videojuegos', 'desarrollo-web', 'ux-ui'],
    technologies: [
      { name: 'HTML', level: 'principal' },
      { name: 'CSS', level: 'principal' },
      { name: 'JavaScript', level: 'principal' },
      { name: 'Tailwind CSS', level: 'secundaria' },
      { name: 'Unity', level: 'secundaria' },
      { name: 'C#', level: 'secundaria' },
      { name: 'EmailJS', level: 'secundaria' },
      { name: 'Cloudflare Workers', level: 'secundaria' },
    ],
    featured: true,
    status: 'en-desarrollo',
    coverImage: `${BASE}/menteando_portada.png`,
    gallery: [
      { type: 'image', src: `${BASE}/menteando16.png`, alt: 'Página de inicio de Menteando: «Mantén tu mente activa y joven»' },
      { type: 'image', src: `${BASE}/menteando1.png`, alt: 'Sección de la web que explica qué se entrena y cómo funciona, en versión móvil' },
      { type: 'image', src: `${BASE}/menteando15.png`, alt: 'Juegos destacados de Menteando en modo oscuro: Reflejos Cruzados, Eco Visual y Doble Canal' },
      { type: 'image', src: `${BASE}/menteando14.png`, alt: 'Catálogo de juegos filtrable por capacidad, con Operaciones Encadenadas y Eco Visual' },
      { type: 'image', src: `${BASE}/menteando13.png`, alt: 'Ficha del juego Doble Canal con su descripción y cómo se juega' },
      { type: 'image', src: `${BASE}/menteando19.png`, alt: 'Juego Misión Orbital con sus instrucciones y el área de juego' },
      { type: 'image', src: `${BASE}/menteando18.png`, alt: 'Misión Orbital en modo oscuro, con las habilidades cognitivas que evalúa' },
      { type: 'image', src: `${BASE}/menteando4.png`, alt: 'Test Digit Span de memoria de trabajo en una partida' },
      { type: 'image', src: `${BASE}/menteando10.jpeg`, alt: 'Cuadrícula de un test de memoria en el móvil' },
      { type: 'image', src: `${BASE}/menteando11.jpeg`, alt: 'Test tipo Stroop en el móvil: elegir el color de la tinta, no la palabra' },
      { type: 'image', src: `${BASE}/menteando6.jpeg`, alt: 'Juego Operaciones Encadenadas en el móvil, con una calculadora en pixel art' },
      { type: 'image', src: `${BASE}/menteando7.jpeg`, alt: 'Juego Reflejos Cruzados en el móvil, ambientado en un saloon del oeste' },
      { type: 'image', src: `${BASE}/menteando17.png`, alt: 'Pantalla de ajustes de música y efectos de un juego espacial' },
      { type: 'image', src: `${BASE}/menteando20.png`, alt: 'Perfil de usuario con capacidades cognitivas, puntos, rachas y tests recomendados' },
      { type: 'image', src: `${BASE}/menteando3.png`, alt: 'Perfil de usuario en modo oscuro con medallas y capacidades cognitivas' },
      { type: 'image', src: `${BASE}/menteando21.png`, alt: 'Medallas, misión actual, últimas sesiones y estadísticas por tipo de habilidad' },
      { type: 'image', src: `${BASE}/menteando9.jpeg`, alt: 'Capacidades cognitivas y métricas de sesiones en el móvil' },
      { type: 'image', src: `${BASE}/menteando8.jpeg`, alt: 'Perfil de usuario en el móvil con el coach cognitivo desactivado' },
      { type: 'image', src: `${BASE}/menteando2.png`, alt: 'Aviso de perfil actualizado correctamente sobre la pantalla de perfil' },
      { type: 'image', src: `${BASE}/menteando5.jpeg`, alt: 'Menú de navegación de Menteando abierto en el móvil' },
    ],
    galleryConfig: { columns: 4, layout: 'masonry' },
    role: 'Autor y desarrollador (investigación, arquitectura, frontend, juegos y tests)',
    team: 'Trabajo de Fin de Grado - Proyecto individual',
    duration: '8 meses',
    learnings: 'Investigar la parte cognitiva y desarrollar la plataforma completa por mi cuenta ha sido lo más difícil. El proyecto sigue en desarrollo.',
  };
