// src/data/projects/entries/michael-soffield-the-rescue.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2021-22/narracion-guion-storyboard/michael-soffield-the-rescue';

export const michaelSoffieldTheRescue: ProjectInput = {
  slug: 'michael-soffield-the-rescue',
  year: 2022,
  academicYear: '2021-22',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Michael Scofield: The Rescue',
  description: 'Aventura gráfica grupal en 2D pixel art con vista cenital, inspirada en Prison Break: Michael Scofield intenta escapar de la cárcel. Incluye inventario, objetos, diálogos, puzles y varias zonas, y está creada con Adventure Game Studio.',
  challenges: 'La programación: conseguir que todas las interacciones del juego funcionasen.',
  highlights: [
    localizedText('🕹️ Aventura gráfica cenital en pixel art', '🕹️ Top-down pixel-art graphic adventure'),
    localizedText('🗺️ Diseño de escenarios y mapas', '🗺️ Scenario and map design'),
    localizedText('🧩 Inventario, objetos, diálogos y puzles', '🧩 Inventory, objects, dialogues and puzzles'),
    localizedText('👥 Proyecto en equipo con Adventure Game Studio', '👥 Team project built with Adventure Game Studio'),
  ],
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Proyecto grupal de la asignatura Narración, Guion y Storyboard, inspirado en la serie Prison Break.',
        'Group project for the Narrative, Script and Storyboard course, inspired by the TV series Prison Break.'
      ),
    },
    {
      kind: 'objective',
      icon: 'flag',
      text: localizedText(
        'Crear una aventura gráfica en la que Michael Scofield intenta escapar de la cárcel, con varias zonas, puzles, objetos y diálogos.',
        'Create a graphic adventure in which Michael Scofield tries to escape from prison, with several zones, puzzles, objects and dialogues.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'El juego se hizo con Adventure Game Studio: pixel art 2D con vista cenital, inventario, objetos, diálogos, puzles y varias zonas. Yo diseñé los escenarios y los mapas, participé en los sprites y spritesheets y en la programación y los diálogos.',
        'The game was built with Adventure Game Studio: top-down 2D pixel art with inventory, objects, dialogues, puzzles and several zones. I designed the scenarios and maps and took part in the sprites and spritesheets, the programming and the dialogues.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'Lo más difícil fue la programación: conseguir que todas las interacciones funcionasen.',
        'The hardest part was the programming: getting every interaction to work.'
      ),
    },
  ],
  skillGains: [
    localizedText('Diseño de escenarios y mapas 2D', '2D scenario and map design'),
    localizedText('Sprites y spritesheets', 'Sprites and spritesheets'),
    localizedText('Programación en Adventure Game Studio', 'Programming in Adventure Game Studio'),
    localizedText('Diálogos de aventura gráfica', 'Graphic adventure dialogues'),
  ],
  en: {
    title: 'Michael Scofield: The Rescue',
    description: 'Group 2D pixel-art graphic adventure with a top-down view, inspired by Prison Break: Michael Scofield tries to escape from prison. It features inventory, objects, dialogues, puzzles and several zones, and is built with Adventure Game Studio.',
    challenges: 'The programming: getting every interaction in the game to work.',
    role: 'Scenarios and maps, sprites, programming and dialogues',
    team: 'Group academic project',
  },
  tags: ['Adventure Game Studio', 'Pixel art', 'Narrativa'],
  subjects: ['Narración, Guion y Storyboard'],
  disciplines: ['videojuegos', 'ilustracion'],
  technologies: [
    { name: 'Adventure Game Studio', level: 'principal' },
  ],
  publicable: true,
  featured: false,
  coverImage: `${BASE}/poster.jpg`,
  featuredMedia: {
    type: 'video',
    src: `${BASE}/gameplay.mp4`,
    poster: `${BASE}/poster.jpg`,
    title: 'Fragmento de juego',
  },
  role: 'Escenarios y mapas, sprites, programación y diálogos',
  team: 'Proyecto académico grupal',
};
