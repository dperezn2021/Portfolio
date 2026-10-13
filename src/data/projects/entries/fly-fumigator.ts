// src/data/projects/entries/fly-fumigator.ts
// Proyecto pendiente: sin material visual todavía. Oculto hasta tener imágenes o vídeo.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const flyFumigator: ProjectInput = {
  slug: 'fly-fumigator',
  year: 2022,
  academicYear: '2021-22',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Fly Fumigator',
  description: 'Juego grupal tipo matamoscas en un escenario 2D con moscas y avispas, creado con Adobe Animate. Las moscas se aplastaban con el ratón. Mi parte: dibujos, sprites, animaciones y otras tareas.',
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Proyecto grupal de la asignatura Diseño Digital 2D, hecho con Adobe Animate.',
        'Group project for the 2D Digital Design course, made with Adobe Animate.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Un matamoscas en un escenario 2D con moscas y avispas, en el que las moscas se aplastaban con el ratón. Yo me ocupé de los dibujos, los sprites, las animaciones y otras tareas del equipo.',
        'A fly-swatter game in a 2D scene with flies and wasps, where flies were squashed with the mouse. I worked on the drawings, sprites, animations and other team tasks.'
      ),
    },
  ],
  tags: [],
  subjects: ['Diseño Digital 2D'],
  disciplines: ['videojuegos', 'diseño-2d'],
  technologies: [
    { name: 'Adobe Animate', level: 'principal' },
  ],
  publicable: false,
  featured: false,
  role: 'Dibujos, sprites y animaciones',
  team: 'Proyecto académico grupal',
};
