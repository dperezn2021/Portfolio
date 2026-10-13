// src/data/projects/entries/juego-de-la-vida.ts
// Oculto: material pendiente de recuperar. Interfaz y controles concretos sin confirmar.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const juegoDeLaVida: ProjectInput = {
  slug: 'juego-de-la-vida',
  year: 2023,
  academicYear: '2022-23',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Juego de la Vida',
  description: 'Implementación individual del Juego de la Vida de Conway para Fundamentos de Tecnología de Videojuegos, programada con HTML, CSS y JavaScript.',
  highlights: [
    localizedText('🧬 Autómata celular de Conway', '🧬 Conway cellular automaton'),
    localizedText('🌐 HTML, CSS y JavaScript', '🌐 HTML, CSS and JavaScript'),
  ],
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Práctica de la asignatura Fundamentos de Tecnología de Videojuegos.',
        'Assignment for the Video Game Technology Fundamentals course.'
      ),
    },
    {
      kind: 'objective',
      icon: 'flag',
      text: localizedText(
        'Implementar el Juego de la Vida de Conway.',
        "Implement Conway's Game of Life."
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Programé la implementación completa de forma individual con HTML, CSS y JavaScript.',
        'I programmed the full implementation on my own with HTML, CSS and JavaScript.'
      ),
    },
  ],
  skillGains: [
    localizedText('Programación de un autómata celular en JavaScript', 'Programming a cellular automaton in JavaScript'),
  ],
  tags: ['JavaScript'],
  subjects: ['Fundamentos de Tecnología de Videojuegos'],
  disciplines: ['videojuegos'],
  technologies: [
    { name: 'HTML', level: 'principal' },
    { name: 'CSS', level: 'principal' },
    { name: 'JavaScript', level: 'principal' },
  ],
  publicable: false,
  featured: false,
  role: 'Programador',
  team: 'Proyecto académico individual',
};
