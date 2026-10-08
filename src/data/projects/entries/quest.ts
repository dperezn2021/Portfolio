// src/data/projects/entries/quest.ts
// Proyecto pendiente: identificado a partir del catálogo académico, pero sin
// material (imágenes, enlaces, descripción detallada) suficiente todavía.
// Oculto hasta completarlo. No inventar portada, galería ni recursos.
import type { ProjectInput } from '../types';

export const quest: ProjectInput = {
  slug: 'quest',
  year: 2025,
  academicYear: '2024-25',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Quest',
  description: 'Aplicación móvil Quest desarrollada para la asignatura Desarrollo de Aplicaciones para Dispositivos Móviles.',
  tags: [],
  subjects: ["Desarrollo de Aplicaciones para Dispositivos Móviles"],
  publicable: false,
  featured: false,
  disciplines: ["aplicaciones"],
};
