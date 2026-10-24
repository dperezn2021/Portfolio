// src/data/projects/entries/personaje-dj-autonomo.ts
// Oculto hasta recuperar material visual. No inventar portada, galería ni recursos.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const personajeDjAutonomo: ProjectInput = {
  slug: 'personaje-dj-autonomo',
  year: 2025,
  academicYear: '2024-25',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Personaje DJ Autónomo',
  description: 'DJ autónomo para una fiesta de un videojuego ya existente, en la que el protagonista debe recoger tres objetos. Programé su comportamiento con árboles de comportamiento en Unity y C#.',
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Trabajo de la asignatura Comportamiento de Personajes: crear un personaje autónomo dentro de un videojuego ya existente, con una fiesta en la que el protagonista recoge tres objetos.',
        'Assignment for the Character Behaviour course: creating an autonomous character inside an existing video game, set at a party where the protagonist collects three objects.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Con Unity, C# y la API de árboles de comportamiento facilitada en la asignatura, el DJ come, vuelve a la cabina y cambia la música según su ánimo y la situación. Me encargué del comportamiento del DJ, sus interacciones y el sistema musical; el arte y el juego base no son míos.',
        'Using Unity, C# and the behaviour-tree API provided in the course, the DJ eats, returns to the booth and changes the music depending on its mood and the situation. I worked on the DJ behaviour, its interactions and the music system; the art and the base game are not mine.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'Aprendí a modelar comportamientos con árboles y nodos, y es una de las asignaturas que más disfruté.',
        'I learned to model behaviours with trees and nodes, and it is one of the courses I enjoyed most.'
      ),
    },
  ],
  skillGains: [
    localizedText('Árboles de comportamiento', 'Behaviour trees'),
    localizedText('IA de personajes en Unity', 'Character AI in Unity'),
  ],
  en: {
    title: 'Autonomous DJ Character',
    description: 'Autonomous DJ for a party in an existing video game, where the protagonist has to collect three objects. I programmed its behaviour with behaviour trees in Unity and C#.',
    role: 'DJ behaviour and music system programmer',
    team: 'Work on an existing video game',
  },
  tags: ['IA', 'Behaviour Trees', 'Unity'],
  subjects: ['Comportamiento de Personajes'],
  disciplines: ['videojuegos', 'ia'],
  technologies: [
    { name: 'Unity', level: 'principal' },
    { name: 'C#', level: 'principal' },
  ],
  publicable: false,
  featured: false,
  role: 'Programador del comportamiento del DJ y del sistema musical',
  team: 'Trabajo sobre un videojuego existente',
};
