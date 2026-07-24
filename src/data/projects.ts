// src/data/projects.ts
import { t } from './translations';

export type LocalizedText = {
  es: string;
  en: string;
};

export type ProjectStoryStepKind = 'context' | 'objective' | 'implementation' | 'learning';

export interface ProjectStoryStep {
  kind: ProjectStoryStepKind;
  icon: string;
  text: LocalizedText;
}

export interface Project {
  slug: string;
  year: number;
  type: string;
  title: string;
  description: string;
  challenges?: string;
  solution?: string;
  highlights?: LocalizedText[];
  story?: ProjectStoryStep[];
  skillGains?: LocalizedText[];
  tags: string[];
  coverImage: string;
  galleryImages?: (string | { src: string; rotate?: 90 | 180 | 270 })[];
  galleryConfig?: {
    columns?: 1 | 2 | 3 | 4 | 5;
    gap?: 'small' | 'medium' | 'large';
    imageSize?: 'small' | 'medium' | 'large' | 'full';
    aspectRatio?: 'auto' | 'square' | 'video' | 'portrait' | 'landscape';
    layout?: 'grid' | 'masonry' | 'featured';
  };
  links?: { label: string; url: string }[];
  featured: boolean;
  role?: string;
  team?: string;
  duration?: string;
  learnings?: string;
  status?: 'completado' | 'en-desarrollo' | 'prototipo' | 'pausado';
  technologies?: { name: string; level?: 'principal' | 'secundaria' | 'experimental' }[];
  disciplines: string[];
}

export type DisciplineKey = 
  | 'videojuegos'
  | 'red'
  | 'aplicaciones'
  | 'desarrollo-web'
  | 'modelado-3d'
  | 'animacion-3d'
  | 'ilustracion'
  | 'diseño-2d'
  | 'ux-ui'
  | 'arquitectura'
  | 'bases-datos'
  | 'devops'
  | 'analisis-datos'
  | 'documentacion';

export type DisciplineInfo = {
  emoji: string;
  label: string;
  label_en: string;
};

const localizedText = (es: string, en: string): LocalizedText => ({ es, en });

// ✅ MAPA DE DISCIPLINAS
export const DISCIPLINE_MAP: Record<DisciplineKey, DisciplineInfo> = {
  'videojuegos': { emoji: '🎮', label: 'Videojuegos', label_en: 'Video Games' },
  'red': { emoji: '🌐', label: 'Red', label_en: 'Network' },
  'aplicaciones': { emoji: '📱', label: 'Aplicaciones Móviles', label_en: 'Mobile Apps' },
  'desarrollo-web': { emoji: '💻', label: 'Desarrollo Web', label_en: 'Web Development' },
  'modelado-3d': { emoji: '🧊', label: 'Modelado 3D', label_en: '3D Modeling' },
  'animacion-3d': { emoji: '🎬', label: 'Animación 3D', label_en: '3D Animation' },
  'ilustracion': { emoji: '🎨', label: 'Ilustración / Concept Art', label_en: 'Illustration / Concept Art' },
  'diseño-2d': { emoji: '🖌️', label: 'Diseño Gráfico', label_en: 'Graphic Design' },
  'ux-ui': { emoji: '🎯', label: 'UX/UI', label_en: 'UX/UI' },
  'arquitectura': { emoji: '🏗️', label: 'Arquitectura de Software', label_en: 'Software Architecture' },
  'bases-datos': { emoji: '🗄️', label: 'Bases de Datos', label_en: 'Databases' },
  'devops': { emoji: '🔧', label: 'DevOps / Infraestructura', label_en: 'DevOps / Infrastructure' },
  'analisis-datos': { emoji: '📊', label: 'Análisis de Datos', label_en: 'Data Analysis' },
  'documentacion': { emoji: '📝', label: 'Documentación Técnica', label_en: 'Technical Documentation' },
};

// ✅ FUNCIÓN PARA OBTENER LABEL DE DISCIPLINA TRADUCIDO
export function getDisciplineLabel(discipline: string, lang: 'es' | 'en' = 'es'): string {
  const info = DISCIPLINE_MAP[discipline as DisciplineKey];
  if (!info) return discipline;
  return lang === 'es' ? info.label : info.label_en;
}

// ============================================
// PROYECTOS - TODOS LOS 16 PROYECTOS
// ============================================
export const projects: Project[] = [
  // ============================================
  // 1. ALIEN RUSH
  // ============================================
  {
    slug: 'alien-rush',
    year: 2025,
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
    coverImage: '/images/projects/alienrush_portada.png',
    galleryImages: [
      '/images/projects/alienrush1.png',
      '/images/projects/alienrush2.png',
      '/images/projects/alienrush3.png',
      '/images/projects/alienrush4.png',
      '/images/projects/alienrush5.png',
      '/images/projects/alienrush6.png',
      '/images/projects/alienrush7.png',
      '/images/projects/alienrush8.png',
      '/images/projects/alienrush9.png',
      '/images/projects/alienrush10.png',
      '/images/projects/alienrush11.png',
      '/images/projects/alienrush12.png',
      '/images/projects/alienrush13.png',
      '/images/projects/alienrush14.png',
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    featured: true,
    links: [
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
  },

  // ============================================
  // 2. ASTROFURY
  // ============================================
  {
    slug: 'astrofury',
    year: 2025,
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
    coverImage: '/images/projects/astrofury_portada.png',
    galleryImages: [
      '/images/projects/astrofury1.png',
      '/images/projects/astrofury2.png',
      '/images/projects/astrofury3.png',
      '/images/projects/astrofury4.png',
      '/images/projects/astrofury5.png',
      '/images/projects/astrofury6.png',
      '/images/projects/astrofury7.png',
      '/images/projects/astrofury8.png',
      '/images/projects/astrofury9.png',
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    featured: true,
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
  },

  // ============================================
  // 3. FANTASY ISLAND
  // ============================================
  {
    slug: 'fantasy-island',
    year: 2023,
    type: 'Proyecto de la Universidad',
    title: 'Fantasy Island',
    description: 'Modelado y texturizado de un escenario 3D para videojuego. Desarrollo completo desde cero utilizando Sketchup y 3dsMax, con texturizado profesional.',
    challenges: 'Crear un escenario 3D completo y coherente desde cero.',
    solution: 'Desarrollar el escenario completo, modelándolo a medida en Sketchup y exportándolo a 3ds Max para unir todas las piezas, texturizar con imágenes propias o de Google, iluminar y renderizar.',
    highlights: [
      localizedText('🏰 Escenario completo modelado desde cero', '🏰 Full environment modeled from scratch'),
      localizedText('🎨 Texturizado en 3dsMax', '🎨 Texturing in 3ds Max'),
      localizedText('⚡ Optimización de polígonos para videojuegos', '⚡ Polygon optimization for games'),
      localizedText('💡 Iluminación avanzada con 3ds Max', '💡 Advanced lighting with 3ds Max'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Primer proyecto de la asignatura Diseño 3D. El objetivo era modelar un escenario posible para un videojuego, aprendiendo herramientas como Sketchup y 3ds Max desde cero.',
          'First project of the 3D Design course. The goal was to model a possible scenario for a video game, learning tools like Sketchup and 3ds Max from scratch.'
        ),
      },
      {
        kind: 'objective',
        icon: 'target',
        text: localizedText(
          'Diseñar modelos en Sketchup o 3ds Max, exportarlos a 3ds Max para unificar el concepto, texturizar con imágenes propias o de Google, iluminar y renderizar la escena final.',
          'Design models in Sketchup or 3ds Max, export them to 3ds Max to unify the concept, texture with custom or Google images, light and render the final scene.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Modelé cada elemento del escenario por separado, los exporté a 3ds Max para montar la escena completa, apliqué texturizado profesional y configuré la iluminación para dar vida al entorno.',
          'I modeled each element of the scenario separately, exported them to 3ds Max to assemble the complete scene, applied professional texturing and configured lighting to bring the environment to life.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Este proyecto sentó mis bases en modelado 3D, texturizado y optimización de assets. Aprendí la importancia de la iluminación en la ambientación y cómo preparar escenarios para motores de videojuegos.',
          'This project laid my foundations in 3D modeling, texturing and asset optimization. I learned the importance of lighting in atmosphere creation and how to prepare scenarios for game engines.'
        ),
      },
    ],
    skillGains: [
      localizedText('Modelado 3D con Sketchup', '3D Modeling with Sketchup'),
      localizedText('Texturizado profesional', 'Professional texturing'),
      localizedText('Iluminación en 3ds Max', 'Lighting in 3ds Max'),
      localizedText('Optimización de polígonos', 'Polygon optimization'),
    ],
    tags: ['Modelado 3D', 'Exportación', 'Texturización'],
    coverImage: '/images/projects/fantasyisland_portada.png',
    galleryImages: [
      '/images/projects/fantasyisland1.png',
      '/images/projects/fantasyisland2.png',
      '/images/projects/fantasyisland3.png',
      '/images/projects/fantasyisland4.png',
      '/images/projects/fantasyisland5.png',
      '/images/projects/fantasyisland6.png',
      '/images/projects/fantasyisland7.png',
      '/images/projects/fantasyisland8.png',
    ],
    galleryConfig: { columns: 2, gap: 'small', layout: 'masonry' },
    featured: true,
    role: 'Artista 3D, Modelador y Texturizador',
    team: 'Proyecto académico personal - Individual',
    duration: '4 meses',
    learnings: 'Perfeccioné mis habilidades en modelado 3D y texturizado. Aprendí a optimizar assets para motores de videojuegos. Descubrí la importancia de la iluminación en la ambientación.',
    status: 'completado',
    technologies: [
      { name: 'Sketchup', level: 'principal' },
      { name: '3ds Max', level: 'principal' },
    ],
    disciplines: ['modelado-3d'],
  },

  // ============================================
  // 4. FLAPPY CHEF
  // ============================================
  {
    slug: 'flappy-chef',
    year: 2025,
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
    coverImage: '/images/projects/flappychef_portada.png',
    galleryImages: [
      '/images/projects/flappychef1.png',
      '/images/projects/flappychef2.png',
      '/images/projects/flappychef3.png',
      '/images/projects/flappychef4.png',
      '/images/projects/flappychef5.png',
      '/images/projects/flappychef6.png',
      '/images/projects/flappychef7.png',
      '/images/projects/flappychef8.png',
      '/images/projects/flappychef9.png',
      '/images/projects/flappychef10.png',
    ],
    galleryConfig: { columns: 4, layout: 'masonry' },
    featured: true,
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
  },

  // ============================================
  // 5. GO FOR SPORTS
  // ============================================
  {
    slug: 'go-for-sports',
    year: 2024,
    type: 'Proyecto de la Universidad',
    title: 'Go For Sports',
    description: 'Videojuego de preguntas sobre deportes creado con Figma. Diseñado con enfoque en accesibilidad y usabilidad, basado en entrevistas y pruebas con usuarios reales.',
    challenges: 'Diseñar una experiencia accesible para diferentes perfiles de usuario. Implementar un sistema de preguntas dinámico y atractivo que combine aprendizaje y evaluación.',
    solution: 'Realicé entrevistas y pruebas con usuarios de diferentes edades y niveles de conocimiento. Diseñé un sistema de preguntas con dos modos de juego: "Chut a portería" y "Cuarto de partido", garantizando accesibilidad en todo momento.',
    highlights: [
      localizedText('🎨 Prototipado en Figma con testing real', '🎨 Figma prototyping with real user testing'),
      localizedText('📱 Diseño responsive para móvil y escritorio', '📱 Responsive design for mobile and desktop'),
      localizedText('🎯 Dos modos de juego: Chut y Cuarto', '🎯 Two game modes: Shot and Quarter'),
      localizedText('♿ Enfoque en accesibilidad y usabilidad', '♿ Focus on accessibility and usability'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto para la asignatura Interacción Persona-Máquina y Usabilidad. La idea era crear un prototipo de aplicación tipo quiz con enfoque en accesibilidad. Tras suspender en ordinaria, lo desarrollé en individual para extraordinaria.',
          'Project for the Human-Computer Interaction and Usability course. The idea was to create a quiz-style application prototype with a focus on accessibility. After failing the regular exam, I developed it individually for the extraordinary exam.'
        ),
      },
      {
        kind: 'objective',
        icon: 'target',
        text: localizedText(
          'Crear un videojuego de preguntas sobre deportes que fuera accesible para todos los públicos, con un sistema de aprendizaje previo a la evaluación. Diseñar dos modos de juego dinámicos y atractivos.',
          'Create a sports quiz video game that was accessible to all audiences, with a learning system prior to evaluation. Design two dynamic and engaging game modes.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Diseñé el prototipo en Figma, realicé pruebas con usuarios y apliqué principios de usabilidad. Desarrollé dos modos de juego: "Chut a portería" (preguntas con 4 opciones) y "Cuarto de partido" (contrarreloj con tiros a canasta).',
          'I designed the prototype in Figma, conducted user testing and applied usability principles. I developed two game modes: "Shot on goal" (4-option questions) and "Game quarter" (timed with basketball shots).'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Aprendí a realizar investigación de usuarios y a aplicar principios de accesibilidad. Mejoré mis habilidades en Figma y prototipado. Descubrí la importancia del diseño centrado en el usuario y cómo adaptar una experiencia a diferentes perfiles.',
          'I learned to conduct user research and apply accessibility principles. I improved my Figma and prototyping skills. I discovered the importance of user-centered design and how to adapt an experience to different profiles.'
        ),
      },
    ],
    skillGains: [
      localizedText('Investigación de usuarios', 'User research'),
      localizedText('Diseño en Figma', 'Figma design'),
      localizedText('Principios de accesibilidad', 'Accessibility principles'),
      localizedText('Prototipado interactivo', 'Interactive prototyping'),
    ],
    tags: ['UX', 'UI', 'Figma'],
    coverImage: '/images/projects/goforsports_portada.png',
    galleryImages: [
      '/images/projects/goforsports1.png',
      '/images/projects/goforsports2.png',
      '/images/projects/goforsports3.png',
      '/images/projects/goforsports4.png',
      '/images/projects/goforsports5.png',
      '/images/projects/goforsports6.png',
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    featured: true,
    links: [
      { label: 'Prototipo', url: 'https://www.figma.com/proto/DNh3kjMxe65IOn76iNjAn7/GoForSports-IPM-V2.0?page-id=0%3A1&node-id=13-24&starting-point-node-id=13%3A24&t=PuG1OyKWfUUYBTge-1' },
      { label: 'Memoria PDF', url: 'https://drive.google.com/uc?export=download&id=1vPIxjVVV_J-wlNxr6CigIUlY7ocMf11r' },
    ],
    role: 'Diseñador UX/UI',
    team: 'Proyecto académico personal - Individual',
    duration: '3 meses',
    learnings: 'Aprendí a realizar investigación de usuarios y a aplicar principios de accesibilidad. Mejoré mis habilidades en Figma y prototipado. Descubrí la importancia del diseño centrado en el usuario.',
    status: 'completado',
    technologies: [
      { name: 'Figma', level: 'principal' },
      { name: 'UX Research', level: 'secundaria' },
      { name: 'Prototyping', level: 'secundaria' },
    ],
    disciplines: ['ux-ui', 'videojuegos'],
  },

  // ============================================
  // 6. GOROBEIA
  // ============================================
  {
    slug: 'gorobeia',
    year: 2024,
    type: 'Proyecto de la Universidad',
    title: 'Gorobeia',
    description: 'Concept art de un videojuego donde Gorak defiende a su tribu. Proceso de arte digital con técnicas de ilustración en Photoshop: siluetas, capas, props y expresiones faciales.',
    challenges: 'Crear un universo visual coherente para un mundo de fantasía. Desarrollar personajes y escenarios que cuenten una historia por sí mismos a través de diferentes técnicas de ilustración.',
    solution: 'Diseñé la narrativa y el concepto del mundo, creé escenarios en blanco y negro por capas, siluetas de personajes, props, hojas de assets y diferentes expresiones faciales del protagonista.',
    highlights: [
      localizedText('🎨 Ilustraciones digitales de fantasía', '🎨 Fantasy digital illustrations'),
      localizedText('👥 Diseño de personajes y escenarios detallados', '👥 Detailed character and environment design'),
      localizedText('🌈 Paleta de colores coherente', '🌈 Coherent color palette'),
      localizedText('📖 Narrativa visual integrada', '📖 Integrated visual storytelling'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto desarrollado para la asignatura Personajes y Escenarios. El objetivo era crear un concept art completo de un videojuego ficticio, incluyendo narrativa, escenarios, personajes y diferentes técnicas de ilustración.',
          'Project developed for the Characters and Scenarios course. The goal was to create a complete concept art for a fictional video game, including narrative, environments, characters and different illustration techniques.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Diseñar el concepto visual de Gorobeia, un mundo de fantasía donde Gorak defiende a su tribu. Crear escenarios en blanco y negro por capas, siluetas de personajes, props, hojas de assets y expresiones faciales del protagonista.',
          'Design the visual concept of Gorobeia, a fantasy world where Gorak defends his tribe. Create black and white layered environments, character silhouettes, props, asset sheets and facial expressions of the protagonist.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Utilicé Photoshop para crear ilustraciones digitales con técnicas de capas, siluetas y collage digital. Desarrollé un moodboard, una paleta de colores coherente y diseñé tanto personajes como escenarios que refuerzan la narrativa del mundo.',
          'I used Photoshop to create digital illustrations using layer techniques, silhouettes and digital collage. I developed a moodboard, a coherent color palette and designed both characters and environments that reinforce the world narrative.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Desarrollé mi estilo de ilustración digital y aprendí a crear universos visuales coherentes. Mejoré mis técnicas de composición y color, y entendí cómo contar historias a través del arte conceptual.',
          'I developed my digital illustration style and learned to create coherent visual universes. I improved my composition and color techniques, and understood how to tell stories through concept art.'
        ),
      },
    ],
    skillGains: [
      localizedText('Ilustración digital en Photoshop', 'Digital illustration in Photoshop'),
      localizedText('Diseño de personajes y escenarios', 'Character and environment design'),
      localizedText('Técnicas de composición y color', 'Composition and color techniques'),
      localizedText('Narrativa visual', 'Visual storytelling'),
    ],
    tags: ['Ilustración', 'Concept Art', 'Photoshop'],
    coverImage: '/images/projects/gorobeia_portada.png',
    galleryImages: [
      '/images/projects/gorobeia1.png',
      '/images/projects/gorobeia2.png',
      '/images/projects/gorobeia3.png',
      '/images/projects/gorobeia4.png',
      '/images/projects/gorobeia5.png',
      '/images/projects/gorobeia6.png',
      '/images/projects/gorobeia7.png',
      '/images/projects/gorobeia8.png',
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    featured: true,
    role: 'Ilustrador y diseñador conceptual',
    team: 'Proyecto académico personal - Individual',
    duration: '2 meses',
    learnings: 'Desarrollé mi estilo de ilustración digital. Aprendí a crear universos visuales coherentes y a contar historias a través del arte. Mejoré mis técnicas de composición y color.',
    status: 'completado',
    technologies: [
      { name: 'Photoshop', level: 'principal' },
      { name: 'Photopea', level: 'principal' },
    ],
    disciplines: ['ilustracion'],
  },

  // ============================================
  // 7. HISTERIA
  // ============================================
  {
    slug: 'histeria',
    year: 2025,
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
    coverImage: '/images/projects/histeria_portada.png',
    galleryImages: [
      '/images/projects/histeria1.png',
      '/images/projects/histeria2.png',
      '/images/projects/histeria3.png',
      '/images/projects/histeria4.png',
      '/images/projects/histeria5.png',
      '/images/projects/histeria6.png',
      '/images/projects/histeria7.png',
      '/images/projects/histeria8.png',
      '/images/projects/histeria11.png',
      '/images/projects/histeria12.png',
      '/images/projects/histeria13.png',
      '/images/projects/histeria14.png',
      '/images/projects/histeria15.png',
      '/images/projects/histeria17.png',
      '/images/projects/histeria18.png',
      '/images/projects/histeria20.png',
      '/images/projects/histeria21.png',
      '/images/projects/histeria22.png',
      '/images/projects/histeria23.png',
      '/images/projects/histeria24.png',
      '/images/projects/histeria25.png',
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
  },

  // ============================================
  // 8. HIT AND UFO
  // ============================================
  {
    slug: 'hit-and-ufo',
    year: 2024,
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
    coverImage: '/images/projects/hittandufo_portada.png',
    galleryImages: [
      '/images/projects/hittandufo1.png',
      '/images/projects/hittandufo2.png',
      '/images/projects/hittandufo4.png',
      '/images/projects/hittandufo5.png',
      '/images/projects/hittandufo6.png',
      '/images/projects/hittandufo7.png',
      '/images/projects/hittandufo8.png',
      '/images/projects/hittandufo9.png',
      '/images/projects/hittandufo10.png',
      '/images/projects/hittandufo11.png',
      '/images/projects/hittandufo12.png',
      '/images/projects/hittandufo13.png',
      '/images/projects/hittandufo14.png',
      '/images/projects/hittandufo15.png',
      '/images/projects/hittandufo16.png',
    ],
    galleryConfig: { columns: 4, gap: 'small', imageSize: 'small', aspectRatio: 'auto', layout: 'masonry' },
    featured: true,
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
  },

  // ============================================
  // 9. INTERNATIONAL WARFARE
  // ============================================
  {
    slug: 'international-warfare',
    year: 2022,
    type: 'Proyecto de la Universidad',
    title: 'International Warfare',
    description: 'Simulación de campaña de financiación para un videojuego. Proyecto para aprender diseño y desarrollo web, concepto art, redes sociales y el proceso completo de lanzamiento de un videojuego.',
    challenges: 'Diseñar una web profesional que simule una campaña de crowdfunding. Transmitir confianza y profesionalidad en todos los aspectos del proyecto: web, redes sociales, trailer y documento de diseño.',
    solution: 'Diseñé una interfaz limpia y profesional con secciones claras para la campaña. Creé el concept art, el trailer, la música, las redes sociales y el GDD completo para simular el lanzamiento de un videojuego.',
    highlights: [
      localizedText('💰 Simulación de campaña de crowdfunding', '💰 Crowdfunding campaign simulation'),
      localizedText('📊 Sistema de seguimiento de progreso', '📊 Progress tracking system'),
      localizedText('🎨 Diseño web profesional y limpio', '🎨 Clean and professional web design'),
      localizedText('🎬 Trailer y música original', '🎬 Trailer and original music'),
      localizedText('📱 Estrategia en redes sociales', '📱 Social media strategy'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto desarrollado para la asignatura Multimedia, Fundamentos del Diseño y Jugabilidad. El objetivo era crear un proyecto completo de lanzamiento de un videojuego, incluyendo concept art, web, redes sociales, trailer y campaña de crowdfunding.',
          'Project developed for the Multimedia, Design Fundamentals and Gameplay course. The goal was to create a complete video game launch project, including concept art, website, social media, trailer and crowdfunding campaign.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Simular el lanzamiento profesional de un videojuego, creando todos los activos necesarios: web con campaña de crowdfunding, presencia en redes sociales, trailer con música original, GDD y estrategia de marketing.',
          'Simulate the professional launch of a video game, creating all necessary assets: website with crowdfunding campaign, social media presence, trailer with original music, GDD and marketing strategy.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Diseñé y desarrollé una web profesional con sistema de simulación de donaciones y seguimiento de progreso. Creé el concept art del juego, un trailer con música original, gestioné redes sociales y elaboré el documento de diseño del juego (GDD) completo.',
          'I designed and developed a professional website with donation simulation and progress tracking. I created the game concept art, a trailer with original music, managed social media and prepared the complete Game Design Document (GDD).'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Aprendí todo el proceso de lanzamiento de un videojuego: desde el concepto hasta la campaña de financiación. Me familiaricé con el desarrollo web, el marketing digital y la importancia de una presencia profesional en redes sociales.',
          'I learned the entire video game launch process: from concept to funding campaign. I became familiar with web development, digital marketing and the importance of a professional social media presence.'
        ),
      },
    ],
    skillGains: [
      localizedText('Desarrollo web (HTML, CSS, JS)', 'Web development (HTML, CSS, JS)'),
      localizedText('Concept art y diseño visual', 'Concept art and visual design'),
      localizedText('Estrategia de marketing digital', 'Digital marketing strategy'),
      localizedText('Documentación de diseño de juegos', 'Game design documentation'),
    ],
    tags: ['Crowdfunding', 'Web', 'Marketing', 'GDD'],
    coverImage: '/images/projects/internationalwarfare_portada.png',
    galleryImages: [
      '/images/projects/internationalwarfare1.png',
      '/images/projects/internationalwarfare2.png',
    ],
    galleryConfig: { columns: 4, layout: 'masonry' },
    featured: true,
    links: [{ label: 'Ir a la web', url: 'https://interwarfare2022.github.io/InterWarfare.github.io/' }],
    role: 'Desarrollador Web y Diseñador',
    team: 'Proyecto académico grupal - 5 personas',
    duration: '3 meses',
    learnings: 'Aprendí conceptos sobre desarrollo web, marketing digital y financiación de videojuegos. Me familiaricé con el proceso completo de lanzamiento de un videojuego.',
    status: 'completado',
    technologies: [
      { name: 'HTML', level: 'principal' },
      { name: 'CSS', level: 'principal' },
      { name: 'JavaScript', level: 'secundaria' },
    ],
    disciplines: ['desarrollo-web', 'ilustracion'],
  },

  // ============================================
  // 10. MENTEANDO (TFG)
  // ============================================
  {
    slug: 'menteando',
    year: 2026,
    type: 'Trabajo de Fin de Grado',
    title: 'Menteando',
    description: 'Desarrollo de una web interactiva para fomentar el desarrollo cognitivo en adultos mediante ejercicios gamificados. Combina psicología cognitiva con gamificación para estimular la memoria, atención y razonamiento.',
    challenges: 'Diseñar ejercicios cognitivos efectivos en formato digital. Crear una experiencia gamificada que mantenga la motivación del usuario. Equilibrar la dificultad para diferentes niveles cognitivos. Aprender herramientas como LocalStorage, TailwindCSS o EmailJS.',
    solution: 'Investigué evidencia científica sobre desarrollo cognitivo. Implementé un sistema de progresión adaptativa con gamificación para mantener la motivación. Desarrollé una aplicación web completa con HTML, CSS, JavaScript, TailwindCSS y LocalStorage para el progreso del usuario.',
    highlights: [
      localizedText('🧠 Ejercicios cognitivos basados en ciencia', '🧠 Science-based cognitive exercises'),
      localizedText('🎮 Sistema de gamificación con recompensas', '🎮 Gamification system with rewards'),
      localizedText('📊 Progresión adaptativa según el usuario', '📊 Adaptive progression based on the user'),
      localizedText('📱 Diseño responsive y accesible', '📱 Responsive and accessible design'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Trabajo de Fin de Grado. El objetivo era desarrollar una herramienta digital que ayudara a adultos a mantener y mejorar sus capacidades cognitivas mediante ejercicios gamificados, combinando psicología cognitiva con tecnologías web.',
          'Final Degree Project. The goal was to develop a digital tool to help adults maintain and improve their cognitive abilities through gamified exercises, combining cognitive psychology with web technologies.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear una aplicación web interactiva con ejercicios cognitivos efectivos, sistema de gamificación que mantenga la motivación, progresión adaptativa al nivel del usuario y diseño responsive y accesible para todos los públicos.',
          'Create an interactive web application with effective cognitive exercises, a gamification system that maintains motivation, adaptive progression to the user level and responsive and accessible design for all audiences.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Desarrollé una aplicación web completa con HTML, CSS y JavaScript. Utilicé TailwindCSS para el diseño, LocalStorage para guardar el progreso del usuario, y EmailJS para el envío de correos. Aprendí sobre SEO, dominios y validación con usuarios reales.',
          'I developed a complete web application with HTML, CSS and JavaScript. I used TailwindCSS for design, LocalStorage for user progress tracking, and EmailJS for email sending. I learned about SEO, domains and validation with real users.'
        ),
      },
      {
        kind: 'learning',
        icon: 'bolt',
        text: localizedText(
          'Este proyecto me enseñó a seguir un plan de trabajo estructurado, profundizar en tecnologías web y aprender otras nuevas como LocalStorage, TailwindCSS, EmailJS y Cloudflare. Comprendí la importancia del SEO, la validación con usuarios reales y el valor de un dominio propio.',
          'This project taught me to follow a structured work plan, deepen web technologies and learn new ones like LocalStorage, TailwindCSS, EmailJS and Cloudflare. I understood the importance of SEO, validation with real users and the value of a custom domain.'
        ),
      },
    ],
    skillGains: [
      localizedText('Desarrollo web full stack', 'Full stack web development'),
      localizedText('TailwindCSS', 'TailwindCSS'),
      localizedText('LocalStorage y progresión de usuario', 'LocalStorage and user progression'),
      localizedText('SEO y validación con usuarios', 'SEO and user validation'),
      localizedText('Gamificación y psicología cognitiva', 'Gamification and cognitive psychology'),
    ],
    tags: ['Desarrollo Cognitivo', 'Gamificación', 'Web'],
    coverImage: '/images/projects/menteando_portada.png',
    galleryImages: [
      '/images/projects/menteando1.png',
      '/images/projects/menteando2.png',
      '/images/projects/menteando3.png',
      '/images/projects/menteando4.png',
      '/images/projects/menteando5.jpeg',
      '/images/projects/menteando6.jpeg',
      '/images/projects/menteando7.jpeg',
      '/images/projects/menteando8.jpeg',
      '/images/projects/menteando9.jpeg',
      '/images/projects/menteando10.jpeg',
      '/images/projects/menteando11.jpeg',
      '/images/projects/menteando12.png',
      '/images/projects/menteando13.png',
      '/images/projects/menteando14.png',
      '/images/projects/menteando15.png',
      '/images/projects/menteando16.png',
      '/images/projects/menteando17.png',
      '/images/projects/menteando18.png',
      '/images/projects/menteando19.png',
      '/images/projects/menteando20.png',
      '/images/projects/menteando21.png',
    ],
    galleryConfig: { columns: 4, layout: 'masonry' },
    featured: true,
    role: 'Desarrollador Full Stack',
    team: 'Trabajo de Fin de Grado - Proyecto individual',
    duration: '8 meses',
    learnings: 'Desarrollo de una aplicación web completa desde cero. Aprendí a integrar principios de psicología cognitiva en el diseño de ejercicios. Mejoré mis habilidades en desarrollo web y aprendí a utilizar herramientas como LocalStorage, TailwindCSS y EmailJS.',
    status: 'completado',
    technologies: [
      { name: 'HTML', level: 'principal' },
      { name: 'JavaScript', level: 'principal' },
      { name: 'Tailwind CSS', level: 'secundaria' },
    ],
    disciplines: ['videojuegos', 'desarrollo-web', 'ux-ui'],
  },

  // ============================================
  // 11. RAKI
  // ============================================
  {
    slug: 'raki',
    year: 2023,
    type: 'Proyecto de la Universidad',
    title: 'Raki',
    description: 'Modelado de un personaje estilo elfo guerrero y su espada para videojuego. Técnicas en 3dsMax con turn around, unwrapping y texturizado en Substance Painter.',
    challenges: 'Crear un personaje estilizado con personalidad. Texturizar de forma que transmita la esencia del personaje. Realizar el turn around (vistas frontal y de perfil) para guiar el modelado.',
    solution: 'Diseñé el turn around del personaje para guiar el modelado en 3ds Max. Modelé armadura, guantes, cuerpo, ojos, cara y pelo, después hice unwrapping y texturizado en Substance Painter.',
    highlights: [
      localizedText('🧑‍🎨 Personaje digital detallado', '🧑‍🎨 Detailed digital character'),
      localizedText('🎨 Texturizado PBR con Substance Painter', '🎨 PBR texturing with Substance Painter'),
      localizedText('📐 Modelado optimizado para videojuegos', '📐 Game-optimized modeling'),
      localizedText('🔄 Turn around para guiar el modelado', '🔄 Turn around to guide modeling'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Segundo proyecto de la asignatura Diseño 3D. Después de modelar un escenario, el siguiente paso fue incluir un personaje. Diseñé Raki, un elfo guerrero, realizando su turn around (vistas frontal y de perfil) para guiar el modelado en 3D.',
          'Second project of the 3D Design course. After modeling a scenario, the next step was to include a character. I designed Raki, a warrior elf, creating his turn around (front and profile views) to guide the 3D modeling.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear un personaje completo en 3D, incluyendo su arma, con técnicas profesionales de modelado, unwrapping y texturizado PBR. El personaje debía tener personalidad y estar optimizado para videojuegos.',
          'Create a complete 3D character, including his weapon, with professional modeling, unwrapping and PBR texturing techniques. The character had to have personality and be optimized for video games.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Realicé el turn around del personaje en 2D para guiar el modelado. Modelé en 3ds Max todos los elementos: armadura, guantes, cuerpo, ojos, cara y pelo, y la espada. Después hice unwrapping y texturizado en Substance Painter para lograr un acabado profesional.',
          'I created the character turn around in 2D to guide the modeling. I modeled in 3ds Max all elements: armor, gloves, body, eyes, face and hair, and the sword. Then I did unwrapping and texturing in Substance Painter for a professional finish.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Mejoré mis habilidades de modelado en 3ds Max y aprendí a texturizar con Substance Painter. Descubrí cómo transmitir personalidad a través del diseño de personajes y la importancia del turn around para guiar el proceso de modelado.',
          'I improved my 3ds Max modeling skills and learned to texture with Substance Painter. I discovered how to convey personality through character design and the importance of turn around to guide the modeling process.'
        ),
      },
    ],
    skillGains: [
      localizedText('Modelado en 3ds Max', '3ds Max modeling'),
      localizedText('Texturizado PBR en Substance Painter', 'PBR texturing in Substance Painter'),
      localizedText('Turn around de personajes', 'Character turn around'),
      localizedText('Optimización para videojuegos', 'Video game optimization'),
    ],
    tags: ['3ds Max', 'Substance Painter', 'Modelado 3D', 'Personajes'],
    coverImage: '/images/projects/raki_portada.png',
    galleryImages: [
      '/images/projects/raki1.png',
      '/images/projects/raki2.png',
      '/images/projects/raki3.png',
      '/images/projects/raki4.png',
      '/images/projects/raki5.png',
      '/images/projects/raki6.png',
    ],
    galleryConfig: { columns: 2, gap: 'small', imageSize: 'medium', aspectRatio: 'video', layout: 'masonry' },
    featured: true,
    role: 'Artista 3D',
    team: 'Proyecto académico personal - Individual',
    duration: '3 meses',
    learnings: 'Mejoré mis habilidades de modelado en 3ds Max. Aprendí a texturizar con Substance Painter. Descubrí cómo transmitir personalidad a través del diseño de personajes.',
    status: 'completado',
    technologies: [
      { name: '3ds Max', level: 'principal' },
      { name: 'Substance Painter', level: 'principal' },
    ],
    disciplines: ['modelado-3d'],
  },

  // ============================================
  // 12. RAKI ANIMACIÓN
  // ============================================
  {
    slug: 'raki-animacion',
    year: 2024,
    type: 'Personal',
    title: 'Raki, el defensor de Fantasy Island',
    description: 'Proyecto de animación 3D que une Fantasy Island y Raki. Animaciones para escenario (path constraints, sistemas de partículas, físicas) y personaje (mocaps, morphing, telas) exportadas a Unity.',
    challenges: 'Integrar animaciones complejas en Unity. Coordinar animaciones de escenario y personaje en una escena cohesiva. Aprender técnicas de animación 3D avanzadas como CAT, mocaps y rigging.',
    solution: 'Utilicé el sistema CAT de 3ds Max para el rigging del personaje. Apliqué técnicas de animación como path constraints, sistemas de partículas, físicas, mocaps, morphing y simulación de telas. Exporté todo a Unity para integrar las animaciones en un entorno interactivo.',
    highlights: [
      localizedText('🎬 Animación de escenario con path constraints', '🎬 Environment animation with path constraints'),
      localizedText('🧍 Animación de personaje con mocaps y morphing', '🧍 Character animation with mocap and morphing'),
      localizedText('🌀 Sistemas de partículas y físicas', '🌀 Particle and physics systems'),
      localizedText('👕 Simulación de telas y cuerpos rígidos', '👕 Cloth and rigid body simulation'),
      localizedText('🎮 Integración completa en Unity', '🎮 Full Unity integration'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto de la asignatura Animación 3D. Utilicé los modelos de Fantasy Island y Raki para implementar animaciones avanzadas. Aprendí técnicas de animación para escenario y personaje, incluyendo sistemas CAT, mocaps y simulación de físicas.',
          'Project for the 3D Animation course. I used the Fantasy Island and Raki models to implement advanced animations. I learned animation techniques for environment and character, including CAT systems, mocaps and physics simulation.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear un proyecto de animación 3D completo que integre animaciones de escenario (path constraints, partículas, físicas) y personaje (mocaps, morphing, telas), exportándolo todo a Unity para su visualización interactiva.',
          'Create a complete 3D animation project that integrates environment animations (path constraints, particles, physics) and character animations (mocaps, morphing, cloth), exporting everything to Unity for interactive visualization.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Usé 3ds Max con el sistema CAT para el rigging del personaje. Apliqué animaciones con keyframes, path constraints para el escenario, sistemas de partículas, físicas y simulación de telas. También usé mocaps y morphing para el personaje. Exporté todo a Unity e integré las animaciones con físicas y otros comportamientos como animación de banderas.',
          'I used 3ds Max with the CAT system for character rigging. I applied animations with keyframes, path constraints for the environment, particle systems, physics and cloth simulation. I also used mocaps and morphing for the character. I exported everything to Unity and integrated animations with physics and other behaviors like flag animation.'
        ),
      },
      {
        kind: 'learning',
        icon: 'bolt',
        text: localizedText(
          'Aprendí a integrar animaciones complejas en Unity, coordinando escenario y personaje. Mejoré mis habilidades de rigging, animación y simulación de físicas. Descubrí cómo crear una escena cohesiva combinando diferentes técnicas de animación 3D.',
          'I learned to integrate complex animations in Unity, coordinating environment and character. I improved my rigging, animation and physics simulation skills. I discovered how to create a cohesive scene combining different 3D animation techniques.'
        ),
      },
    ],
    skillGains: [
      localizedText('Rigging con sistema CAT', 'CAT system rigging'),
      localizedText('Animación con mocaps y morphing', 'Mocap and morphing animation'),
      localizedText('Simulación de físicas y telas', 'Physics and cloth simulation'),
      localizedText('Integración en Unity', 'Unity integration'),
      localizedText('Animación de escenarios', 'Environment animation'),
    ],
    tags: ['Animación 3D', 'Rigging', 'Mocaps', 'Unity'],
    coverImage: '/images/projects/raki_fantasyisland_portada.png',
    galleryImages: [
      '/images/projects/raki_fantasyisland1.png',
      '/images/projects/raki_fantasyisland2.png',
      '/images/projects/raki_fantasyisland3.png',
      '/images/projects/raki_fantasyisland4.png',
      '/images/projects/raki_fantasyisland5.png',
      '/images/projects/raki_fantasyisland6.png',
      '/images/projects/raki_fantasyisland7.png',
      '/images/projects/raki_fantasyisland8.png',
      '/images/projects/raki_fantasyisland9.png',
      '/images/projects/raki_fantasyisland10.png',
      '/images/projects/raki_fantasyisland11.png',
    ],
    galleryConfig: { columns: 2, layout: 'masonry' },
    featured: true,
    links: [
      { label: 'Descargar Video Demo', url: 'https://drive.usercontent.google.com/download?id=1M33dduNXhd0KcDbCXc_guaIjXz6m5XC8&export=download&authuser=0' },
      { label: 'Descargar Memoria PDF', url: 'https://drive.google.com/uc?export=download&id=14ZU4PO5u3BqDJQ63_NMkwtNdeVA9h26j' },
    ],
    role: 'Artista y animador 3D',
    team: 'Proyecto académico personal - Individual',
    duration: '5 meses',
    learnings: 'Aprendí a integrar animaciones complejas en Unity. Mejoré mis habilidades de rigging y animación. Descubrí cómo coordinar animaciones de escenario y personaje.',
    status: 'completado',
    technologies: [
      { name: '3ds Max', level: 'principal' },
      { name: 'Unity', level: 'principal' },
    ],
    disciplines: ['animacion-3d', 'modelado-3d'],
  },

  // ============================================
  // 13. REDES SOCIALES
  // ============================================
  {
    slug: 'redes-sociales',
    year: 2024,
    type: 'Freelance',
    title: 'Redes Sociales',
    description: 'Plantillas de Canva para equipos de fútbol en redes sociales (Instagram, Facebook). Diseño enfocado en marketing deportivo y branding de equipos.',
    challenges: 'Crear plantillas versátiles que mantengan la identidad de marca. Diseñar para diferentes formatos y plataformas con una estética coherente y profesional.',
    solution: 'Diseñé un sistema de plantillas modulares que mantienen una identidad visual coherente. Adapté cada plantilla a las especificaciones de cada plataforma y creé una guía de estilo para el cliente.',
    highlights: [
      localizedText('⚽ Diseño enfocado en marketing deportivo', '⚽ Sports-marketing-focused design'),
      localizedText('📐 Plantillas modulares y versátiles', '📐 Modular and versatile templates'),
      localizedText('🎨 Branding coherente para equipos', '🎨 Coherent team branding'),
      localizedText('📖 Guía de estilo incluida', '📖 Style guide included'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'brush',
        text: localizedText(
          'Proyecto personal para explorar el diseño gráfico en Canva. Quería experimentar con branding y marketing deportivo, creando plantillas profesionales para equipos de fútbol en redes sociales.',
          'Personal project to explore graphic design in Canva. I wanted to experiment with sports branding and marketing, creating professional templates for football teams on social media.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear un sistema de plantillas modulares para Instagram y Facebook que mantuviera una identidad visual coherente, fuera versátil y adaptado a diferentes formatos, con una guía de estilo para el cliente.',
          'Create a modular template system for Instagram and Facebook that maintained a coherent visual identity, was versatile and adapted to different formats, with a style guide for the client.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Diseñé en Canva un conjunto de plantillas modulares con identidad visual coherente. Adapté cada plantilla a las especificaciones de cada plataforma y creé una guía de estilo para garantizar la consistencia de la marca.',
          'I designed in Canva a set of modular templates with a coherent visual identity. I adapted each template to the specifications of each platform and created a style guide to ensure brand consistency.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Aprendí a diseñar para diferentes formatos y plataformas, mejoré mis habilidades de branding y marketing deportivo, y descubrí cómo crear plantillas versátiles y adaptables sin perder la identidad de marca.',
          'I learned to design for different formats and platforms, improved my branding and sports marketing skills, and discovered how to create versatile and adaptable templates without losing brand identity.'
        ),
      },
    ],
    skillGains: [
      localizedText('Diseño en Canva', 'Canva design'),
      localizedText('Branding y marketing deportivo', 'Sports branding and marketing'),
      localizedText('Diseño de plantillas modulares', 'Modular template design'),
      localizedText('Guías de estilo', 'Style guides'),
    ],
    tags: ['Canva', 'Marketing', 'Diseño Gráfico'],
    coverImage: '/images/projects/rrss_portada.png',
    galleryImages: [
      '/images/projects/rrss1.png',
      '/images/projects/rrss2.png',
      '/images/projects/rrss3.png',
      '/images/projects/rrss4.png',
      '/images/projects/rrss5.png',
      '/images/projects/rrss6.png',
      '/images/projects/rrss7.png',
      '/images/projects/rrss8.png',
      '/images/projects/rrss9.png',
      '/images/projects/rrss10.png',
    ],
    galleryConfig: { columns: 2, layout: 'masonry' },
    featured: true,
    role: 'Diseñador Gráfico',
    team: 'Proyecto personal - Individual',
    duration: '0.5 mes',
    learnings: 'Aprendí a diseñar para diferentes formatos y plataformas. Mejoré mis habilidades de branding y marketing deportivo. Descubrí cómo crear plantillas versátiles y adaptables.',
    status: 'completado',
    technologies: [
      { name: 'Canva', level: 'principal' },
    ],
    disciplines: ['diseño-2d'],
  },

  // ============================================
  // 14. SÍ, SEÑOR OSCURO
  // ============================================
  {
    slug: 'si-senor-oscuro',
    year: 2023,
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
    coverImage: '/images/projects/siseñoroscuro_portada.png',
    galleryImages: [
      '/images/projects/siseñoroscuro1.png',
      '/images/projects/siseñoroscuro2.png',
      '/images/projects/siseñoroscuro3.png',
      '/images/projects/siseñoroscuro4.png',
      '/images/projects/siseñoroscuro5.png',
      '/images/projects/siseñoroscuro6.png',
      '/images/projects/siseñoroscuro7.png',
      '/images/projects/siseñoroscuro8.png',
      '/images/projects/siseñoroscuro9.png',
      '/images/projects/siseñoroscuro10.png',
    ],
    galleryConfig: { columns: 5, layout: 'masonry' },
    featured: true,
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
  },

  // ============================================
  // 15. WHISPERS OF SHADOWS
  // ============================================
  {
    slug: 'whispers-of-shadows',
    year: 2024,
    type: 'Proyecto de la Universidad',
    title: 'The Whispers of Shadows',
    description: 'Concepto de videojuego 3D estilo Chibi ambientado en el Reino de las Sombras. Escenario y personajes modelados en 3D con 3ds Max, incluyendo un rey oscuro y un mundo de contrastes.',
    challenges: 'Crear un mundo de sombras con estilo Chibi. Diseñar un rey que transmita autoridad y misterio. Desarrollar un visual pitch deck completo con concept art, moodboards y diseño de personajes.',
    solution: 'Utilicé un estilo Chibi con proporciones exageradas para dar un tono amigable pero misterioso. El Reino de las Sombras fue diseñado con contrastes fuertes entre luces y sombras, y el rey fue modelado con elementos que transmiten poder y enigma.',
    highlights: [
      localizedText('👑 Diseño con autoridad y misterio', '👑 Design with authority and mystery'),
      localizedText('🎨 Contraste entre luces y sombras', '🎨 Contrast between light and shadow'),
      localizedText('🧊 Modelado 3D de escenario y personajes', '🧊 3D modeling of environments and characters'),
      localizedText('📖 Visual pitch deck completo', '📖 Complete visual pitch deck'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto de la asignatura Diseño Visual y Arte Final. El objetivo era crear un visual pitch deck completo para un videojuego, incluyendo concept art, moodboards, paleta cromática, diseño de personajes y escenarios, UI/HUD y documentación de diseño.',
          'Project for the Visual Design and Final Art course. The goal was to create a complete visual pitch deck for a video game, including concept art, moodboards, color palette, character and environment design, UI/HUD and design documentation.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Desarrollar un concepto de videojuego 3D estilo Chibi ambientado en el Reino de las Sombras. Diseñar un rey oscuro que transmita autoridad y misterio, y crear un mundo de contrastes entre luces y sombras. Presentar un pitch deck profesional.',
          'Develop a 3D Chibi-style video game concept set in the Shadow Kingdom. Design a dark king that conveys authority and mystery, and create a world of contrasts between light and shadow. Present a professional pitch deck.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Utilicé 3ds Max para el modelado 3D del escenario y personajes, aunque también exploré Blender. Diseñé el estilo Chibi con proporciones exageradas y contrastes fuertes. Creé un visual pitch deck completo con referencias, moodboards, key art, diseño de personajes y escenarios, UI/HUD y GDD.',
          'I used 3ds Max for 3D modeling of environments and characters, although I also explored Blender. I designed the Chibi style with exaggerated proportions and strong contrasts. I created a complete visual pitch deck with references, moodboards, key art, character and environment design, UI/HUD and GDD.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Aprendí a crear un mundo de sombras con estilo Chibi, mejoré mis habilidades de modelado 3D y descubrí cómo diseñar un personaje que transmita autoridad y misterio. También aprendí a crear un visual pitch deck profesional para presentar un concepto de videojuego.',
          'I learned to create a shadow world with Chibi style, improved my 3D modeling skills and discovered how to design a character that conveys authority and mystery. I also learned to create a professional visual pitch deck to present a video game concept.'
        ),
      },
    ],
    skillGains: [
      localizedText('Modelado 3D en 3ds Max', '3D modeling in 3ds Max'),
      localizedText('Visual pitch deck', 'Visual pitch deck'),
      localizedText('Diseño de personajes y escenarios', 'Character and environment design'),
      localizedText('Concept art y moodboards', 'Concept art and moodboards'),
    ],
    tags: ['Chibi', '3ds Max', 'Concept Art', 'Pitch Deck'],
    coverImage: '/images/projects/whispersofshadows_portada.png',
    galleryImages: [
      '/images/projects/whispersofshadows1.png',
      '/images/projects/whispersofshadows2.png',
      '/images/projects/whispersofshadows3.png',
      '/images/projects/whispersofshadows8.png',
      '/images/projects/whispersofshadows4.png',
      '/images/projects/whispersofshadows5.png',
      '/images/projects/whispersofshadows6.png',
      '/images/projects/whispersofshadows7.png',
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    featured: true,
    role: 'Artista 3D y diseñador conceptual',
    team: 'Proyecto académico grupal - 4 personas',
    duration: '2 meses',
    learnings: 'Aprendí a crear un mundo de sombras con estilo Chibi. Mejoré mis habilidades de modelado 3D. Descubrí cómo diseñar un rey que transmita autoridad y misterio.',
    status: 'completado',
    technologies: [
      { name: '3ds Max', level: 'principal' },
    ],
    disciplines: ['modelado-3d', 'ilustracion'],
  },

  // ============================================
  // 16. YUMALA
  // ============================================
  {
    slug: 'yumala',
    year: 2022,
    type: 'Personal',
    title: 'Yumala',
    description: 'Carátula para PS4. Concept art de un MOBA en tercera persona que combina magia, mitología y elementos modernos. Collage creado con Photoshop.',
    challenges: 'Fusionar elementos antiguos y modernos en una composición visual coherente. Crear una carátula que capture la esencia del juego y llame la atención en el mercado.',
    solution: 'Realicé un collage digital combinando elementos mitológicos con diseños modernos. Utilicé técnicas de composición y color para lograr un equilibrio visual que transmite la fusión de mundos del juego.',
    highlights: [
      localizedText('🎨 Carátula para PS4', '🎨 PS4 cover art'),
      localizedText('🔄 Fusión de magia, mitología y modernidad', '🔄 Fusion of magic, mythology, and modernity'),
      localizedText('🖼️ Técnica de collage digital', '🖼️ Digital collage technique'),
      localizedText('🎯 Composición visual equilibrada', '🎯 Balanced visual composition'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto de la asignatura Diseño 2D. El objetivo era crear una carátula para una consola de la época usando técnicas de collage digital. Elegí PS4 y diseñé Yumala, un concepto de MOBA en tercera persona que combina magia, mitología y elementos modernos.',
          'Project for the 2D Design course. The goal was to create a cover for a console of the era using digital collage techniques. I chose PS4 and designed Yumala, a third-person MOBA concept combining magic, mythology and modern elements.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear una carátula impactante para PS4 que fusionara elementos antiguos y modernos, capturando la esencia de un juego MOBA en tercera persona con temática de magia y mitología.',
          'Create an impactful PS4 cover that merged ancient and modern elements, capturing the essence of a third-person MOBA game with magic and mythology themes.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Utilicé técnicas de collage digital en Photoshop para combinar elementos mitológicos con diseños modernos. Apliqué técnicas de composición y color para lograr un equilibrio visual que transmitiera la fusión de mundos del juego.',
          'I used digital collage techniques in Photoshop to combine mythological elements with modern designs. I applied composition and color techniques to achieve a visual balance that conveyed the fusion of game worlds.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Aprendí a fusionar elementos antiguos y modernos en una composición visual coherente. Mejoré mis habilidades de collage digital y descubrí cómo crear una carátula que capture la esencia de un juego y llame la atención en el mercado.',
          'I learned to merge ancient and modern elements into a coherent visual composition. I improved my digital collage skills and discovered how to create a cover that captures the essence of a game and stands out in the market.'
        ),
      },
    ],
    skillGains: [
      localizedText('Collage digital en Photoshop', 'Digital collage in Photoshop'),
      localizedText('Composición y color', 'Composition and color'),
      localizedText('Diseño de carátulas', 'Cover design'),
      localizedText('Concept art de MOBA', 'MOBA concept art'),
    ],
    tags: ['Collage', 'Photoshop', 'Diseño Gráfico'],
    coverImage: '/images/projects/yumala_portada.png',
    galleryImages: [
      '/images/projects/yumala1.png',
    ],
    galleryConfig: { columns: 4, layout: 'masonry' },
    featured: true,
    role: 'Ilustrador y diseñador',
    team: 'Proyecto académico personal - Individual',
    duration: '3 semanas',
    learnings: 'Aprendí a fusionar elementos antiguos y modernos en una composición visual. Mejoré mis habilidades de collage digital. Descubrí cómo crear una carátula que capture la esencia de un juego.',
    status: 'completado',
    technologies: [
      { name: 'Photoshop', level: 'principal' },
    ],
    disciplines: ['diseño-2d', 'ilustracion'],
  },
];

// Re-exportar t para facilitar el uso
export { t };