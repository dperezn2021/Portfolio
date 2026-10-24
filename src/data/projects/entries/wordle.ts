// src/data/projects/entries/wordle.ts
// Oculto hasta recuperar material visual. No inventar portada, galería ni recursos.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const wordle: ProjectInput = {
  slug: 'wordle',
  year: 2025,
  academicYear: '2024-25',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Wordle',
  description: 'Adaptación grupal y sencilla de Wordle para Android, con teclado en pantalla, pistas por colores y un banco amplio de palabras. Me encargué de la programación.',
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Adaptación de Wordle a Android realizada en grupo para la asignatura Desarrollo de Aplicaciones para Dispositivos Móviles.',
        'Android adaptation of Wordle built as a group for the Mobile Device Application Development course.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'La app incluye un teclado en pantalla, pistas de colores para cada letra y un banco amplio de palabras. Me encargué de la programación, con Android Studio.',
        'The app includes an on-screen keyboard, colour hints for each letter and a large word bank. I handled the programming, using Android Studio.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'Las partes más difíciles fueron el teclado en pantalla y trabajar con un lenguaje nuevo.',
        'The hardest parts were the on-screen keyboard and working with a new language.'
      ),
    },
  ],
  skillGains: [
    localizedText('Desarrollo de apps Android', 'Android app development'),
    localizedText('Interfaz de teclado en pantalla', 'On-screen keyboard interface'),
  ],
  en: {
    title: 'Wordle',
    description: 'Simple group adaptation of Wordle for Android, with an on-screen keyboard, colour hints and a large word bank. I was in charge of the programming.',
    role: 'Programmer',
    team: 'Academic group project',
  },
  tags: ['Android', 'App móvil'],
  subjects: ['Desarrollo de Aplicaciones para Dispositivos Móviles'],
  disciplines: ['aplicaciones'],
  technologies: [{ name: 'Android Studio', level: 'principal' }],
  publicable: false,
  featured: false,
  role: 'Programador',
  team: 'Proyecto académico grupal',
};
