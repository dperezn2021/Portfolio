// src/data/projects/entries/practica-a-estrella.ts
// Oculto hasta recuperar material visual. No inventar portada, galería ni recursos.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const practicaAEstrella: ProjectInput = {
  slug: 'practica-a-estrella',
  year: 2024,
  academicYear: '2023-24',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Práctica A* (Pathfinding)',
  description: 'Práctica grupal de navegación con el algoritmo A* sobre una cuadrícula: un personaje debía llegar a la meta pasando por puntos intermedios. Desarrollada en Unity con C#.',
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Práctica grupal de la asignatura Desarrollo de Juegos con Inteligencia Artificial, centrada en la búsqueda de caminos con A*.',
        'Group assignment for the Game Development with Artificial Intelligence course, focused on pathfinding with A*.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Implementación en Unity y C# de la navegación A* sobre una cuadrícula, con un personaje que debía alcanzar la meta pasando antes por varios puntos intermedios.',
        'Unity and C# implementation of A* navigation on a grid, with a character that had to reach the goal after passing through several intermediate points.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'La depuración fue lo más frustrante: cuando el personaje no encontraba el camino, había que rastrear en qué paso del algoritmo fallaba.',
        'Debugging was the most frustrating part: when the character failed to find a path, the failing step of the algorithm had to be tracked down.'
      ),
    },
  ],
  skillGains: [
    localizedText('Pathfinding con A*', 'A* pathfinding'),
    localizedText('IA de navegación en Unity', 'Navigation AI in Unity'),
  ],
  en: {
    title: 'A* Practice (Pathfinding)',
    description: 'Group assignment on navigation with the A* algorithm on a grid: a character had to reach the goal by passing through intermediate points. Built in Unity with C#.',
    team: 'Academic group project',
  },
  tags: ['IA', 'Pathfinding', 'Unity'],
  subjects: ['Desarrollo de Juegos con Inteligencia Artificial'],
  disciplines: ['videojuegos', 'ia'],
  technologies: [
    { name: 'Unity', level: 'principal' },
    { name: 'C#', level: 'principal' },
  ],
  publicable: false,
  featured: false,
  team: 'Proyecto académico grupal',
};
