// src/data/projects/entries/astrofury.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const media = '/images/projects/2023-24/ingenieria-de-videojuegos/astrofury';

export const astrofury: ProjectInput = {
    slug: 'astrofury',
    year: 2025,
    academicYear: '2023-24',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Astrofury',
    description: 'Shooter espacial por oleadas hecho en equipo con Unity y C#: hay que sobrevivir, sumar puntos y gastarlos en una tienda de objetos y mejoras. Mi parte fueron las interfaces, la implementación de los objetos, la integración y las pruebas.',
    challenges: 'Aplicar varios patrones de diseño en un mismo juego y coordinar los sistemas entre sí dentro de Unity.',
    solution: 'El equipo organizó el juego con prefabs y ScriptableObjects y con los patrones Singleton, State, Object Pooling, Flyweight y Observer. Yo me encargué de las interfaces y de implementar los objetos, y de integrar y probar el resultado.',
    highlights: [
      localizedText('🌊 Supervivencia por oleadas con sistema de puntuación', '🌊 Wave-based survival with a scoring system'),
      localizedText('🛒 Tienda con objetos y mejoras', '🛒 Shop with items and upgrades'),
      localizedText('🧠 Patrones Singleton, State, Object Pooling, Flyweight y Observer', '🧠 Singleton, State, Object Pooling, Flyweight and Observer patterns'),
      localizedText('🧩 Prefabs y ScriptableObjects en Unity', '🧩 Prefabs and ScriptableObjects in Unity'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto en equipo de cuatro personas para la asignatura Ingeniería de Videojuegos, orientado a usar en un juego completo los patrones de diseño vistos en clase.',
          'Four-person team project for the Video Game Engineering course, aimed at using the design patterns studied in class in a complete game.'
        ),
      },
      {
        kind: 'objective',
        icon: 'target',
        text: localizedText(
          'Entregar un shooter espacial jugable en el que sobrevivir a oleadas de enemigos, acumular puntuación y comprar objetos y mejoras en una tienda.',
          'Deliver a playable space shooter in which you survive waves of enemies, build up a score and buy items and upgrades in a shop.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'hub',
        text: localizedText(
          'Juego desarrollado en Unity con C#, con prefabs y ScriptableObjects y con los patrones Singleton, State, Object Pooling, Flyweight y Observer. Mi contribución fueron las interfaces y la implementación de los objetos, además de la integración de las partes del equipo y las pruebas.',
          'Game developed in Unity with C#, using prefabs and ScriptableObjects and the Singleton, State, Object Pooling, Flyweight and Observer patterns. My contribution was the interfaces and the implementation of the items, plus integrating the team\'s parts and testing.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Lo más exigente fue dominar los patrones de diseño y lograr que los distintos sistemas del juego funcionaran coordinados dentro de Unity.',
          'The most demanding parts were getting to grips with the design patterns and making the game\'s different systems work together in Unity.'
        ),
      },
    ],
    skillGains: [
      localizedText('Patrones de diseño en un juego completo', 'Design patterns in a complete game'),
      localizedText('Interfaces y objetos en Unity', 'UI and items in Unity'),
      localizedText('Integración de sistemas en equipo', 'Team systems integration'),
      localizedText('Pruebas de juego', 'Game testing'),
    ],
    tags: ['Unity', 'C#', 'Patrones de diseño'],
    subjects: ['Ingeniería de Videojuegos'],
    disciplines: ['videojuegos', 'devops'],
    technologies: [
      { name: 'Unity', level: 'principal' },
      { name: 'C#', level: 'principal' },
      { name: 'itch.io', level: 'secundaria' },
    ],
    featured: false,
    status: 'completado',
    coverImage: `${media}/astrofury_portada.png`,
    gallery: [
      { type: 'image', src: `${media}/astrofury1.png`, alt: 'Captura de Astrofury (1)' },
      { type: 'image', src: `${media}/astrofury2.png`, alt: 'Captura de Astrofury (2)' },
      { type: 'image', src: `${media}/astrofury3.png`, alt: 'Captura de Astrofury (3)' },
      { type: 'image', src: `${media}/astrofury4.png`, alt: 'Captura de Astrofury (4)' },
      { type: 'image', src: `${media}/astrofury5.png`, alt: 'Captura de Astrofury (5)' },
      { type: 'image', src: `${media}/astrofury6.png`, alt: 'Captura de Astrofury (6)' },
      { type: 'image', src: `${media}/astrofury7.png`, alt: 'Captura de Astrofury (7)' },
      { type: 'image', src: `${media}/astrofury8.png`, alt: 'Captura de Astrofury (8)' },
      { type: 'image', src: `${media}/astrofury9.png`, alt: 'Captura de Astrofury (9)' },
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    resources: [
      { type: 'link', url: 'https://tokpary.itch.io/astrofury', title: 'Jugar' },
    ],
    role: 'Programador (interfaces, objetos e integración)',
    team: 'EquipoT - 4 personas',
    duration: '4 meses',
    learnings: 'Lo más exigente fue dominar los patrones de diseño y coordinar los sistemas del juego dentro de Unity.',
  };
