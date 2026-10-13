// src/data/projects/entries/quest.ts
// Oculto hasta recuperar material visual. No inventar portada, galería ni recursos.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const quest: ProjectInput = {
  slug: 'quest',
  year: 2025,
  academicYear: '2024-25',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Quest',
  description: 'Primera aplicación Android grupal: una app de preguntas de cultura general desarrollada con Flutter y Android Studio. Me encargué de la programación y el diseño.',
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Primera aplicación Android del grado, realizada en grupo para la asignatura Desarrollo de Aplicaciones para Dispositivos Móviles.',
        'First Android app of the degree, built as a group for the Mobile Device Application Development course.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'App de preguntas de cultura general desarrollada con Flutter y Android Studio. Participé en la programación y en el diseño de la aplicación.',
        'General-knowledge quiz app built with Flutter and Android Studio. I worked on both the programming and the design of the app.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'Lo más costoso fue configurar Android Studio, Flutter y el emulador antes de poder empezar a desarrollar.',
        'The most time-consuming part was setting up Android Studio, Flutter and the emulator before development could start.'
      ),
    },
  ],
  skillGains: [
    localizedText('Desarrollo de apps con Flutter', 'App development with Flutter'),
    localizedText('Configuración del entorno Android', 'Android environment setup'),
  ],
  tags: ['Android', 'Flutter', 'App móvil'],
  subjects: ['Desarrollo de Aplicaciones para Dispositivos Móviles'],
  disciplines: ['aplicaciones'],
  technologies: [
    { name: 'Flutter', level: 'principal' },
    { name: 'Android Studio', level: 'principal' },
  ],
  publicable: false,
  featured: false,
  role: 'Programador y diseñador',
  team: 'Proyecto académico grupal',
};
