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
    description: 'Proyecto de animación 3D que une Fantasy Island y Raki. Animaciones para escenario (path constraints, sistemas de partículas, físicas) y personaje (mocaps, morphing, telas) exportadas a Unity.',
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
          'Aprendí a integrar animaciones complejas en Unity, coordinando escenario y personaje. Mejoré mis habilidades de rigging, animación y simulación de físicas. Descubrí cómo crear una escena cohesiva combinando diferentes técnicas de animación 3D.',
          'I learned to integrate complex animations in Unity, coordinating environment and character. I improved my rigging, animation and physics simulation skills. I discovered how to create a cohesive scene combining different 3D animation techniques.'
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
    tags: ['Animación 3D', 'Rigging', 'Mocaps', 'Unity'],
    subjects: ['Animación 3D'],
    coverImage: '/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland_portada.png',
    galleryImages: [
      '/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland1.png',
      '/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland2.png',
      '/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland3.png',
      '/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland4.png',
      '/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland5.png',
      '/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland6.png',
      '/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland7.png',
      '/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland8.png',
      '/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland9.png',
      '/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland10.png',
      '/images/projects/2023-24/animacion-3d/raki-animacion/raki_fantasyisland11.png',
    ],
    galleryConfig: { columns: 2, layout: 'masonry' },
    featured: true,
    links: [
      { label: 'Descargar Video Demo', url: 'https://drive.usercontent.google.com/download?id=1M33dduNXhd0KcDbCXc_guaIjXz6m5XC8&export=download&authuser=0' },
      { label: 'Descargar Memoria PDF', url: 'https://drive.google.com/uc?export=download&id=14ZU4PO5u3BqDJQ63_NMkwtNdeVA9h26j' },
    ],
    role: 'Artista y animador 3D',
    team: 'Proyecto académico personal - Individual',
    duration: '5 meses',
    learnings: 'Aprendí a integrar animaciones complejas en Unity. Mejoré mis habilidades de rigging y animación. Descubrí cómo coordinar animaciones de escenario y personaje.',
    status: 'completado',
    technologies: [
      { name: '3ds Max', level: 'principal' },
      { name: 'Unity', level: 'principal' },
    ],
    disciplines: ['animacion-3d', 'modelado-3d'],
  };
