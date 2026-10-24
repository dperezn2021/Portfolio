// src/data/projects/entries/zombierush.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2022-23/programacion-avanzada/zombierush';

export const zombierush: ProjectInput = {
  slug: 'zombierush',
  year: 2023,
  academicYear: '2022-23',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'ZombieRush',
  description: 'Videojuego grupal en C++ en el que un zombi debe llegar a la meta sin morir a lo largo de tres niveles. Me encargué de parte de la programación y de buscar un asset 3D.',
  highlights: [
    localizedText('🧟 Juego en C++ de tres niveles', '🧟 Three-level C++ game'),
    localizedText('🧱 Programación orientada a objetos: clases, herencia y polimorfismo', '🧱 Object-oriented programming: classes, inheritance and polymorphism'),
    localizedText('⌨️ Control con flechas o WASD', '⌨️ Arrow keys or WASD controls'),
  ],
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Proyecto grupal de la asignatura Programación Avanzada, centrada en C++ y programación orientada a objetos.',
        'Group project for the Advanced Programming course, focused on C++ and object-oriented programming.'
      ),
    },
    {
      kind: 'objective',
      icon: 'flag',
      text: localizedText(
        'Crear un juego en el que un zombi tiene que alcanzar la meta sin morir a través de tres niveles.',
        'Create a game in which a zombie has to reach the goal without dying across three levels.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'El personaje se mueve con las flechas o con WASD, con una perspectiva cenital inclinada. El código se organiza con clases, herencia y polimorfismo. Mi parte fue la programación y la búsqueda de un asset 3D.',
        'The character moves with the arrow keys or WASD, seen from a tilted top-down perspective. The code is organised with classes, inheritance and polymorphism. My part was programming and finding a 3D asset.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'Lo más complicado fueron los punteros y la depuración del código.',
        'The hardest parts were pointers and debugging the code.'
      ),
    },
  ],
  skillGains: [
    localizedText('Programación orientada a objetos en C++', 'Object-oriented programming in C++'),
    localizedText('Manejo de punteros y depuración', 'Pointer handling and debugging'),
  ],
  en: {
    title: 'ZombieRush',
    description: 'Group C++ video game in which a zombie must reach the goal without dying across three levels. I handled part of the programming and found a 3D asset.',
    role: 'Programmer',
    team: 'Group academic project',
  },
  tags: ['C++', 'POO'],
  subjects: ['Programación Avanzada'],
  disciplines: ['videojuegos'],
  technologies: [
    { name: 'C++', level: 'principal' },
  ],
  publicable: true,
  featured: false,
  coverImage: `${BASE}/poster.jpg`,
  featuredMedia: {
    type: 'video',
    src: `${BASE}/gameplay.mp4`,
    poster: `${BASE}/poster.jpg`,
    title: 'Vídeo de gameplay',
  },
  role: 'Programador',
  team: 'Proyecto académico grupal',
};
