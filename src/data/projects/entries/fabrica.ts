// src/data/projects/entries/fabrica.ts
// Oculto: material pendiente de recuperar. Funcionamiento exacto y autoría técnica sin confirmar.
import type { ProjectInput } from '../types';

export const fabrica: ProjectInput = {
  slug: 'fabrica',
  year: 2023,
  academicYear: '2022-23',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Fábrica',
  description: 'Práctica individual sencilla de Fundamentos de Tecnología de Videojuegos sobre una fábrica.',
  en: {
    title: 'Factory',
    description: 'Simple individual assignment for Video Game Technology Fundamentals about a factory.',
    team: 'Individual academic project',
  },
  tags: ['JavaScript'],
  subjects: ['Fundamentos de Tecnología de Videojuegos'],
  disciplines: ['videojuegos'],
  technologies: [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
  ],
  publicable: false,
  featured: false,
  team: 'Proyecto académico individual',
};
