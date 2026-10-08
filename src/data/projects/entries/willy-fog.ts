// src/data/projects/entries/willy-fog.ts
// Proyecto pendiente: identificado a partir del catálogo académico, pero sin
// material (imágenes, enlaces, descripción detallada) suficiente todavía.
// Oculto hasta completarlo. No inventar portada, galería ni recursos.
import type { ProjectInput } from '../types';

export const willyFog: ProjectInput = {
  slug: 'willy-fog',
  year: 2022,
  academicYear: '2021-22',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Willy Fog',
  description: 'Animación 2D de un personaje caminando, desarrollada para la asignatura Diseño Digital 2D. Pensada principalmente como contenido en vídeo; pendiente de recuperar el material.',
  tags: [],
  subjects: ["Diseño Digital 2D"],
  featuredMedia: { type: 'video', src: '/images/projects/2021-22/diseño-digital-2d/willy-fog/willy-fog.mp4' },
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: {
        es: 'Proyecto de la asignatura Diseño Digital 2D. El objetivo era crear una animación 2D de un personaje caminando, aplicando principios de animación y técnicas de diseño digital.',
        en: 'Project for the 2D Digital Design course. The goal was to create a 2D animation of a character walking, applying animation principles and digital design techniques.',
      },
    },
    {
      kind: 'objective',
      icon: 'flag',
      text: {
        es: 'Crear una animación fluida y expresiva de un personaje caminando, demostrando habilidades en diseño digital y animación 2D.',
        en: 'Create a smooth and expressive animation of a character walking, demonstrating skills in digital design and 2D animation.',
      },
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: {
        es: 'Utilicé software de animación 2D para diseñar y animar al personaje, aplicando principios de animación como anticipación, acción y reacción, y manteniendo consistencia en el estilo visual.',
        en: 'I used 2D animation software to design and animate the character, applying animation principles such as anticipation, action and reaction, and maintaining consistency in the visual style.',
      },
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: {
        es: 'Aprendí a aplicar principios de animación en un proyecto práctico, mejorando mis habilidades en diseño digital y comprensión del movimiento y la expresión en personajes animados.',
        en: 'I learned to apply animation principles in a practical project, improving my skills in digital design and understanding of movement and expression in animated characters.',
      },
    },
  ],
  skillGains: [
    { es: 'Animación 2D', en: '2D Animation' },
    { es: 'Diseño digital', en: 'Digital Design' },
    { es: 'Principios de animación', en: 'Animation Principles' },
  ],
  coverImage: '/images/projects/2021-22/diseño-digital-2d/willy-fog/willy-fog01.png',
 
  publicable: true,
  featured: false,
  disciplines: ["diseño-2d", "animacion-2d"],
};
