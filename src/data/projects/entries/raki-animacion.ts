// src/data/projects/entries/raki-animacion.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const rakiAnimacion: ProjectInput = {
    slug: 'raki-animacion',
    year: 2024,
    academicYear: '2023-24',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Raki, el defensor de Fantasy Island',
    description: 'Proyecto individual de animación 3D que reúne Fantasy Island y Raki: animación de escenario (path constraints, partículas, físicas) y de personaje (mocap, morphing, telas), con rigging CAT en 3ds Max y exportación a Unity.',
    challenges: 'Integrar animaciones complejas en Unity. Coordinar animaciones de escenario y personaje en una escena cohesiva. Aprender técnicas de animación 3D avanzadas como CAT, mocaps y rigging.',
    solution: 'Utilicé el sistema CAT de 3ds Max para el rigging del personaje. Apliqué técnicas de animación como path constraints, sistemas de partículas, físicas, mocaps, morphing y simulación de telas. Exporté todo a Unity para integrar las animaciones en un entorno interactivo.',
    highlights: [
      localizedText('🎬 Animación de escenario con path constraints', '🎬 Environment animation with path constraints'),
      localizedText('🧍 Animación de personaje con mocaps y morphing', '🧍 Character animation with mocap and morphing'),
      localizedText('🌀 Sistemas de partículas y físicas', '🌀 Particle and physics systems'),
      localizedText('👕 Simulación de telas y cuerpos rígidos', '👕 Cloth and rigid body simulation'),
      localizedText('🎮 Integración completa en Unity', '🎮 Full Unity integration'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto de la asignatura Animación 3D. Utilicé los modelos de Fantasy Island y Raki para implementar animaciones avanzadas. Aprendí técnicas de animación para escenario y personaje, incluyendo sistemas CAT, mocaps y simulación de físicas.',
          'Project for the 3D Animation course. I used the Fantasy Island and Raki models to implement advanced animations. I learned animation techniques for environment and character, including CAT systems, mocaps and physics simulation.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Crear un proyecto de animación 3D completo que integre animaciones de escenario (path constraints, partículas, físicas) y personaje (mocaps, morphing, telas), exportándolo todo a Unity para su visualización interactiva.',
          'Create a complete 3D animation project that integrates environment animations (path constraints, particles, physics) and character animations (mocaps, morphing, cloth), exporting everything to Unity for interactive visualization.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Usé 3ds Max con el sistema CAT para el rigging del personaje. Apliqué animaciones con keyframes, path constraints para el escenario, sistemas de partículas, físicas y simulación de telas. También usé mocaps y morphing para el personaje. Exporté todo a Unity e integré las animaciones con físicas y otros comportamientos como animación de banderas.',
          'I used 3ds Max with the CAT system for character rigging. I applied animations with keyframes, path constraints for the environment, particle systems, physics and cloth simulation. I also used mocaps and morphing for the character. I exported everything to Unity and integrated animations with physics and other behaviors like flag animation.'
        ),
      },
      {
        kind: 'learning',
        icon: 'bolt',
        text: localizedText(
          'Aprendí a integrar en Unity animaciones de escenario y de personaje dentro de una misma escena, combinando rigging con CAT, mocap, morphing y simulación de físicas y telas.',
          'I learned to integrate environment and character animations into a single Unity scene, combining CAT rigging, mocap, morphing, and physics and cloth simulation.'
        ),
      },
    ],
    skillGains: [
      localizedText('Rigging con sistema CAT', 'CAT system rigging'),
      localizedText('Animación con mocaps y morphing', 'Mocap and morphing animation'),
      localizedText('Simulación de físicas y telas', 'Physics and cloth simulation'),
      localizedText('Integración en Unity', 'Unity integration'),
      localizedText('Animación de escenarios', 'Environment animation'),
    ],
    en: {
      title: 'Raki, the Defender of Fantasy Island',
      description: 'Individual 3D animation project that brings together Fantasy Island and Raki: environment animation (path constraints, particles, physics) and character animation (mocap, morphing, cloth), with CAT rigging in 3ds Max and export to Unity.',
      challenges: 'Integrating complex animations in Unity. Coordinating environment and character animations in a cohesive scene. Learning advanced 3D animation techniques such as CAT, mocap and rigging.',
      solution: 'I used the CAT system in 3ds Max to rig the character. I applied animation techniques such as path constraints, particle systems, physics, mocap, morphing and cloth simulation. I exported everything to Unity to integrate the animations in an interactive environment.',
      role: '3D Artist and Animator',
      team: 'Personal academic project - Individual',
      duration: '5 months',
      learnings: 'I learned to integrate environment and character animations into a single Unity scene, combining CAT rigging, mocap, morphing, and physics and cloth simulation.',
    },
    tags: ['Animación 3D', 'Rigging', 'Mocaps', 'Unity'],
    subjects: ['Animación 3D'],
    disciplines: ['animacion-3d', 'modelado-3d'],
    technologies: [
      { name: '3ds Max', level: 'principal' },
      { name: 'Unity', level: 'principal' },
    ],
    featured: true,
    status: 'completado',
    coverImage: '/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland_portada.jpg',
    featuredMedia: {
      type: 'video',
      src: '/images/projects/2023-24/animacion-3d/raki-animacion/explicativo.mp4',
      poster: '/images/projects/2023-24/animacion-3d/raki-animacion/explicativo-poster.jpg',
      title: 'Vídeo explicativo del proyecto',
    },
    gallery: [
      { type: 'video', src: '/images/projects/2023-24/animacion-3d/raki-animacion/gameplay.mp4', poster: '/images/projects/2023-24/animacion-3d/raki-animacion/gameplay-poster.jpg', title: 'Recorrido por la escena con Raki', titleEn: 'Walkthrough of the scene with Raki' },
      { type: 'video', src: '/images/projects/2023-24/animacion-3d/raki-animacion/videopracticafinal.mp4', poster: '/images/projects/2023-24/animacion-3d/raki-animacion/videopracticafinal-poster.jpg', title: 'Práctica final', titleEn: 'Final assignment' },
      { type: 'video', src: '/images/projects/2023-24/animacion-3d/raki-animacion/animacion-personaje.mp4', poster: '/images/projects/2023-24/animacion-3d/raki-animacion/animacion-personaje-poster.jpg', title: 'Animación del personaje en 3ds Max', titleEn: 'Character animation in 3ds Max' },
      ...Array.from({ length: 11 }, (_, i) => ({
        type: 'image' as const,
        src: `/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland${i + 1}.webp`,
        alt: `Captura ${i + 1} del proyecto de animación 3D de Raki en Fantasy Island`,
      })),
      { type: 'image', src: '/images/projects/2023-24/animacion-3d/raki-animacion/escenarioprincipal.jpg', alt: 'Vista general del escenario principal de Fantasy Island' },
      { type: 'image', src: '/images/projects/2023-24/animacion-3d/raki-animacion/cenital.jpg', alt: 'Vista cenital de la isla de Fantasy Island' },
      { type: 'image', src: '/images/projects/2023-24/animacion-3d/raki-animacion/islapiedras.jpg', alt: 'Isla de piedras del escenario de Fantasy Island' },
      { type: 'image', src: '/images/projects/2023-24/animacion-3d/raki-animacion/gallinas.jpg', alt: 'Gallinas en el escenario de Fantasy Island' },
      { type: 'image', src: '/images/projects/2023-24/animacion-3d/raki-animacion/barril1.jpg', alt: 'Barril en el escenario de Fantasy Island' },
      { type: 'image', src: '/images/projects/2023-24/animacion-3d/raki-animacion/fogata1.jpg', alt: 'Fogata en el escenario de Fantasy Island (1)' },
      { type: 'image', src: '/images/projects/2023-24/animacion-3d/raki-animacion/fogata2.jpg', alt: 'Fogata en el escenario de Fantasy Island (2)' },
      { type: 'image', src: '/images/projects/2023-24/animacion-3d/raki-animacion/puenteexplotando1.jpg', alt: 'Animación del puente explotando (1)' },
      { type: 'image', src: '/images/projects/2023-24/animacion-3d/raki-animacion/puenteexplotando2.jpg', alt: 'Animación del puente explotando (2)' },
    ],
    galleryConfig: { columns: 2, layout: 'masonry' },
    resources: [
      { type: 'link', title: 'Descargar Video Demo', url: 'https://drive.usercontent.google.com/download?id=1M33dduNXhd0KcDbCXc_guaIjXz6m5XC8&export=download&authuser=0' },
      { type: 'pdf', title: 'Memoria PDF', url: '/images/projects/2023-24/animacion-3d/raki-animacion/fantasyisland.pdf' },
      { type: 'link', title: 'Descargar Memoria PDF', display: 'link', url: 'https://drive.google.com/uc?export=download&id=14ZU4PO5u3BqDJQ63_NMkwtNdeVA9h26j' },
    ],
    role: 'Artista y animador 3D',
    team: 'Proyecto académico personal - Individual',
    duration: '5 meses',
    learnings: 'Aprendí a integrar en Unity animaciones de escenario y de personaje dentro de una misma escena, combinando rigging con CAT, mocap, morphing y simulación de físicas y telas.',
  };
