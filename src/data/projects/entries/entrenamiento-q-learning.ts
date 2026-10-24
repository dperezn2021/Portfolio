// src/data/projects/entries/entrenamiento-q-learning.ts
// Oculto hasta recuperar material visual. No inventar portada, galería ni recursos.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const entrenamientoQLearning: ProjectInput = {
  slug: 'entrenamiento-q-learning',
  year: 2024,
  academicYear: '2023-24',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Entrenamiento Q-Learning',
  description: 'Proyecto grupal en Unity y C# en el que un agente aprende por refuerzo a huir de un perseguidor y esquivar obstáculos sobre una cuadrícula, mediante una Q-table, recompensas, penalizaciones y episodios de entrenamiento.',
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Proyecto grupal de la asignatura Desarrollo de Juegos con Inteligencia Artificial, dedicado al aprendizaje por refuerzo con Q-learning.',
        'Group project for the Game Development with Artificial Intelligence course, focused on reinforcement learning with Q-learning.'
      ),
    },
    {
      kind: 'objective',
      icon: 'flag',
      text: localizedText(
        'Entrenar a un agente para que huyera de un perseguidor y evitara obstáculos en una cuadrícula.',
        'Train an agent to flee from a chaser and avoid obstacles on a grid.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Desarrollo en Unity y C# con una Q-table, un sistema de recompensas y penalizaciones y episodios de entrenamiento. Participé de forma intensa en el trabajo del grupo.',
        'Built in Unity and C# with a Q-table, a reward and penalty system, and training episodes. I took an active part in the group work.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'Fue un trabajo especialmente difícil: ajustar el entrenamiento requirió muchos intentos.',
        'It was an especially hard assignment: tuning the training took many attempts.'
      ),
    },
  ],
  skillGains: [
    localizedText('Aprendizaje por refuerzo (Q-learning)', 'Reinforcement learning (Q-learning)'),
    localizedText('Diseño de recompensas y penalizaciones', 'Reward and penalty design'),
  ],
  en: {
    title: 'Q-Learning Training',
    description: 'Group project in Unity and C# in which an agent learns through reinforcement to flee from a chaser and avoid obstacles on a grid, using a Q-table, rewards, penalties and training episodes.',
    team: 'Academic group project',
  },
  tags: ['IA', 'Q-Learning', 'Unity'],
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
