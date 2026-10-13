// src/data/projects/entries/bonk.ts
// Entrada padre de la colección BONK. Los siete juegos viven en
// src/data/collections/bonk.ts y tienen página propia, pero no son proyectos.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const bonk: ProjectInput = {
  slug: 'bonk',
  year: 2026,
  context: 'personal',
  type: 'Personal',
  title: 'BONK',
  description: 'Colección personal de siete videojuegos arcade web desarrollados en 2026 con asistencia de inteligencia artificial, pensados para ser ligeros, accesibles y aptos para plataformas como YouTube Playables. Todos están publicados en itch.io.',
  highlights: [
    localizedText('🎮 Siete juegos arcade con mecánicas distintas', '🎮 Seven arcade games with different mechanics'),
    localizedText('🌐 Juegos web ligeros con Phaser 3 y HTML5', '🌐 Lightweight web games built with Phaser 3 and HTML5'),
    localizedText('🤖 Desarrollo asistido por IA con ChatGPT y Claude Code', '🤖 AI-assisted development with ChatGPT and Claude Code'),
    localizedText('🕹️ Todos jugables en itch.io', '🕹️ All playable on itch.io'),
  ],
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'En 2026 desarrollé BONK, una colección personal de siete videojuegos arcade para web. Se publican en itch.io bajo el nombre BONK y están en revisión para su posible distribución en YouTube Playables.',
        'In 2026 I built BONK, a personal collection of seven arcade web games. They are published on itch.io under the BONK name and are being considered for distribution on YouTube Playables.'
      ),
    },
    {
      kind: 'objective',
      icon: 'flag',
      text: localizedText(
        'Crear juegos web ligeros, accesibles y de partidas cortas, preparados para plataformas como YouTube Playables, con un género y una mecánica distinta en cada uno.',
        'Create lightweight, accessible, short-session web games ready for platforms such as YouTube Playables, each with its own genre and mechanic.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Los juegos se hicieron con JavaScript y Phaser 3, con asistencia de IA (ChatGPT y Claude Code). El código, los gráficos, el audio y los textos se generaron con esa asistencia (así lo declaran también las páginas de itch.io), y no los presento como trabajo manual mío. Según el juego usan WebAudio y almacenamiento web o Platform.storage para guardar el progreso.',
        'The games were built with JavaScript and Phaser 3, with AI assistance (ChatGPT and Claude Code). The code, the graphics, the audio and the text were generated with that assistance (as the itch.io pages also state), and I do not present them as hand-made work. Depending on the game they use WebAudio and web storage or Platform.storage to save progress.'
      ),
    },
  ],
  tags: ['Videojuegos web', 'Phaser 3', 'Desarrollo con IA'],
  disciplines: ['videojuegos', 'ia'],
  technologies: [
    { name: 'JavaScript', level: 'principal' },
    { name: 'Phaser 3', level: 'principal' },
    { name: 'HTML5', level: 'secundaria' },
    { name: 'WebAudio', level: 'secundaria' },
    { name: 'ChatGPT', level: 'principal' },
    { name: 'Claude Code', level: 'principal' },
  ],
  publicable: true,
  featured: false,
  status: 'completado',
  resources: [
    { type: 'link', url: 'https://bonkplay.itch.io', title: 'Colección BONK en itch.io' },
  ],
  role: 'Autor de la colección (desarrollo asistido por IA)',
  team: 'Proyecto personal - Individual',
};
