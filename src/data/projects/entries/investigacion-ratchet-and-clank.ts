// src/data/projects/entries/investigacion-ratchet-and-clank.ts
// Oculto: la memoria está pendiente de recuperar. Juego exacto de la saga, formato y software sin confirmar.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const investigacionRatchetAndClank: ProjectInput = {
  slug: 'investigacion-ratchet-and-clank',
  year: 2023,
  academicYear: '2022-23',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Investigación: Ratchet & Clank',
  description: 'Investigación extensa para Dibujo Artístico sobre el diseño de Ratchet & Clank: personajes, escenarios, props, interfaces, diálogos, animaciones y cinemáticas.',
  highlights: [
    localizedText('🔎 Análisis del diseño de personajes, escenarios y props', '🔎 Analysis of character, environment and prop design'),
    localizedText('🎬 Interfaces, animaciones y cinemáticas', '🎬 Interfaces, animations and cutscenes'),
    localizedText('📝 Memoria extensa', '📝 Extensive report'),
  ],
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Trabajo de investigación de la asignatura Dibujo Artístico sobre el diseño visual de la saga Ratchet & Clank.',
        'Research work for the Artistic Drawing course on the visual design of the Ratchet & Clank series.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Consulté vídeos y foros y redacté una memoria extensa que recorre personajes, escenarios, props, interfaces, diálogos, animaciones y cinemáticas.',
        'I consulted videos and forums and wrote an extensive report covering characters, environments, props, interfaces, dialogue, animations and cutscenes.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'Lo que más me llamó la atención fueron los efectos visuales, las interfaces, las animaciones y las cinemáticas.',
        'What stood out most to me were the visual effects, the interfaces, the animations and the cutscenes.'
      ),
    },
  ],
  skillGains: [
    localizedText('Análisis del diseño visual de un videojuego', 'Visual design analysis of a video game'),
  ],
  en: {
    title: 'Research: Ratchet & Clank',
    description: 'Extensive research for Artistic Drawing on the design of Ratchet & Clank: characters, environments, props, interfaces, dialogue, animations and cutscenes.',
    role: 'Research and writing',
  },
  tags: ['Investigación', 'Diseño de videojuegos'],
  subjects: ['Dibujo Artístico'],
  disciplines: ['ilustracion', 'documentacion'],
  publicable: false,
  featured: false,
  role: 'Investigación y redacción',
};
