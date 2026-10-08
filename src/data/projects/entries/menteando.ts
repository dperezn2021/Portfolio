// src/data/projects/entries/menteando.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const menteando: ProjectInput = {
    slug: 'menteando',
    year: 2026,
    academicYear: '2025-26',
    context: 'grado',
    type: 'Trabajo de Fin de Grado',
    title: 'Menteando',
    description: 'Desarrollo de una web interactiva para fomentar el desarrollo cognitivo en adultos mediante ejercicios gamificados. Combina psicología cognitiva con gamificación para estimular la memoria, atención y razonamiento.',
    challenges: 'Diseñar ejercicios cognitivos efectivos en formato digital. Crear una experiencia gamificada que mantenga la motivación del usuario. Equilibrar la dificultad para diferentes niveles cognitivos. Aprender herramientas como LocalStorage, TailwindCSS o EmailJS.',
    solution: 'Investigué evidencia científica sobre desarrollo cognitivo. Implementé un sistema de progresión adaptativa con gamificación para mantener la motivación. Desarrollé una aplicación web completa con HTML, CSS, JavaScript, TailwindCSS y LocalStorage para el progreso del usuario.',
    highlights: [
      localizedText('🧠 Ejercicios cognitivos basados en ciencia', '🧠 Science-based cognitive exercises'),
      localizedText('🎮 Sistema de gamificación con recompensas', '🎮 Gamification system with rewards'),
      localizedText('📊 Progresión adaptativa según el usuario', '📊 Adaptive progression based on the user'),
      localizedText('📱 Diseño responsive y accesible', '📱 Responsive and accessible design'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Trabajo de Fin de Grado. El objetivo era desarrollar una herramienta digital que ayudara a adultos a mantener y mejorar sus capacidades cognitivas mediante ejercicios gamificados, combinando psicología cognitiva con tecnologías web.',
          'Final Degree Project. The goal was to develop a digital tool to help adults maintain and improve their cognitive abilities through gamified exercises, combining cognitive psychology with web technologies.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear una aplicación web interactiva con ejercicios cognitivos efectivos, sistema de gamificación que mantenga la motivación, progresión adaptativa al nivel del usuario y diseño responsive y accesible para todos los públicos.',
          'Create an interactive web application with effective cognitive exercises, a gamification system that maintains motivation, adaptive progression to the user level and responsive and accessible design for all audiences.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Desarrollé una aplicación web completa con HTML, CSS y JavaScript. Utilicé TailwindCSS para el diseño, LocalStorage para guardar el progreso del usuario, y EmailJS para el envío de correos. Aprendí sobre SEO, dominios y validación con usuarios reales.',
          'I developed a complete web application with HTML, CSS and JavaScript. I used TailwindCSS for design, LocalStorage for user progress tracking, and EmailJS for email sending. I learned about SEO, domains and validation with real users.'
        ),
      },
      {
        kind: 'learning',
        icon: 'bolt',
        text: localizedText(
          'Este proyecto me enseñó a seguir un plan de trabajo estructurado, profundizar en tecnologías web y aprender otras nuevas como LocalStorage, TailwindCSS, EmailJS y Cloudflare. Comprendí la importancia del SEO, la validación con usuarios reales y el valor de un dominio propio.',
          'This project taught me to follow a structured work plan, deepen web technologies and learn new ones like LocalStorage, TailwindCSS, EmailJS and Cloudflare. I understood the importance of SEO, validation with real users and the value of a custom domain.'
        ),
      },
    ],
    skillGains: [
      localizedText('Desarrollo web full stack', 'Full stack web development'),
      localizedText('TailwindCSS', 'TailwindCSS'),
      localizedText('LocalStorage y progresión de usuario', 'LocalStorage and user progression'),
      localizedText('SEO y validación con usuarios', 'SEO and user validation'),
      localizedText('Gamificación y psicología cognitiva', 'Gamification and cognitive psychology'),
    ],
    tags: ['Desarrollo Cognitivo', 'Gamificación', 'Web'],
    subjects: [],
    coverImage: '/images/projects/2025-26/tfg/menteando/menteando_portada.png',
    galleryImages: [
      '/images/projects/2025-26/tfg/menteando/menteando1.png',
      '/images/projects/2025-26/tfg/menteando/menteando2.png',
      '/images/projects/2025-26/tfg/menteando/menteando3.png',
      '/images/projects/2025-26/tfg/menteando/menteando4.png',
      '/images/projects/2025-26/tfg/menteando/menteando5.jpeg',
      '/images/projects/2025-26/tfg/menteando/menteando6.jpeg',
      '/images/projects/2025-26/tfg/menteando/menteando7.jpeg',
      '/images/projects/2025-26/tfg/menteando/menteando8.jpeg',
      '/images/projects/2025-26/tfg/menteando/menteando9.jpeg',
      '/images/projects/2025-26/tfg/menteando/menteando10.jpeg',
      '/images/projects/2025-26/tfg/menteando/menteando11.jpeg',
      '/images/projects/2025-26/tfg/menteando/menteando12.png',
      '/images/projects/2025-26/tfg/menteando/menteando13.png',
      '/images/projects/2025-26/tfg/menteando/menteando14.png',
      '/images/projects/2025-26/tfg/menteando/menteando15.png',
      '/images/projects/2025-26/tfg/menteando/menteando16.png',
      '/images/projects/2025-26/tfg/menteando/menteando17.png',
      '/images/projects/2025-26/tfg/menteando/menteando18.png',
      '/images/projects/2025-26/tfg/menteando/menteando19.png',
      '/images/projects/2025-26/tfg/menteando/menteando20.png',
      '/images/projects/2025-26/tfg/menteando/menteando21.png',
    ],
    galleryConfig: { columns: 4, layout: 'masonry' },
    featured: true,
    role: 'Desarrollador Full Stack',
    team: 'Trabajo de Fin de Grado - Proyecto individual',
    duration: '8 meses',
    learnings: 'Desarrollo de una aplicación web completa desde cero. Aprendí a integrar principios de psicología cognitiva en el diseño de ejercicios. Mejoré mis habilidades en desarrollo web y aprendí a utilizar herramientas como LocalStorage, TailwindCSS y EmailJS.',
    status: 'completado',
    technologies: [
      { name: 'HTML', level: 'principal' },
      { name: 'JavaScript', level: 'principal' },
      { name: 'Tailwind CSS', level: 'secundaria' },
    ],
    disciplines: ['videojuegos', 'desarrollo-web', 'ux-ui'],
  };
