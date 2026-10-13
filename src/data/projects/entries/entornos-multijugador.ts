// src/data/projects/entries/entornos-multijugador.ts
// Oculto hasta recuperar material visual. No inventar portada, galería ni recursos.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const entornosMultijugador: ProjectInput = {
  slug: 'entornos-multijugador',
  year: 2024,
  academicYear: '2023-24',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Entornos Multijugador',
  description: 'Integración de comunicación multijugador en un juego ya desarrollado (humanos, zombis, contagio y monedas). Desarrollé el lobby completo y participé en la programación de la comunicación.',
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Práctica de la asignatura Entornos Multijugador. Se partía de un juego ya desarrollado, con humanos, zombis, contagio y monedas, al que había que añadir comunicación en red.',
        'Assignment for the Multiplayer Environments course. The starting point was an already developed game with humans, zombies, contagion and coins, to which network communication had to be added.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Desarrollé el lobby completo y participé en la programación de la comunicación entre los jugadores. El juego base no es de mi autoría.',
        'I built the complete lobby and took part in programming the communication between players. The base game is not my work.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'Fue una asignatura exigente y la comunicación en red resultó especialmente difícil de plantear y depurar.',
        'It was a demanding course, and network communication was particularly hard to design and debug.'
      ),
    },
  ],
  skillGains: [
    localizedText('Programación de lobbies multijugador', 'Multiplayer lobby programming'),
    localizedText('Comunicación en red entre jugadores', 'Network communication between players'),
  ],
  tags: ['Multijugador', 'Lobby'],
  subjects: ['Entornos Multijugador'],
  disciplines: ['videojuegos', 'red'],
  publicable: false,
  featured: false,
  role: 'Programador del lobby y de la comunicación multijugador',
  team: 'Proyecto académico grupal',
};
