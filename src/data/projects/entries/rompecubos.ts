// src/data/projects/entries/rompecubos.ts
// Oculto: material pendiente de recuperar. Número exacto de niveles y fases sin confirmar.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const rompecubos: ProjectInput = {
  slug: 'rompecubos',
  year: 2023,
  academicYear: '2022-23',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Rompecubos',
  description: 'Juego grupal tipo Breakout de Fundamentos de Tecnología de Videojuegos, con varios niveles y fases, hecho con HTML, CSS, JavaScript y Phaser 3. Aporté la idea y la programación.',
  highlights: [
    localizedText('🧱 Juego tipo Breakout con varios niveles y fases', '🧱 Breakout-style game with several levels and phases'),
    localizedText('⚙️ Phaser 3: colisiones y físicas', '⚙️ Phaser 3: collisions and physics'),
  ],
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Práctica grupal de la asignatura Fundamentos de Tecnología de Videojuegos.',
        'Group assignment for the Video Game Technology Fundamentals course.'
      ),
    },
    {
      kind: 'objective',
      icon: 'flag',
      text: localizedText(
        'Crear un juego tipo Breakout con varios niveles y fases.',
        'Create a Breakout-style game with several levels and phases.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Lo desarrollamos con HTML, CSS, JavaScript y Phaser 3. Mi parte fue la idea del juego y su programación.',
        'We built it with HTML, CSS, JavaScript and Phaser 3. My part was the game idea and its programming.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'Lo más difícil fueron las colisiones, las físicas y la lógica del juego.',
        'The hardest parts were collisions, physics and game logic.'
      ),
    },
  ],
  skillGains: [
    localizedText('Colisiones y físicas con Phaser 3', 'Collisions and physics with Phaser 3'),
  ],
  tags: ['Phaser 3', 'JavaScript'],
  subjects: ['Fundamentos de Tecnología de Videojuegos'],
  disciplines: ['videojuegos'],
  technologies: [
    { name: 'Phaser 3', level: 'principal' },
    { name: 'JavaScript', level: 'principal' },
    { name: 'HTML', level: 'secundaria' },
    { name: 'CSS', level: 'secundaria' },
  ],
  publicable: false,
  featured: false,
  role: 'Idea y programación',
  team: 'Proyecto académico grupal',
};
