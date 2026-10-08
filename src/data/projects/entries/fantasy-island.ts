// src/data/projects/entries/fantasy-island.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const fantasyIsland: ProjectInput = {
    slug: 'fantasy-island',
    year: 2023,
    academicYear: '2021-22',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Fantasy Island',
    description: 'Modelado y texturizado de un escenario 3D para videojuego. Desarrollo completo desde cero utilizando Sketchup y 3dsMax, con texturizado profesional.',
    challenges: 'Crear un escenario 3D completo y coherente desde cero.',
    solution: 'Desarrollar el escenario completo, modelándolo a medida en Sketchup y exportándolo a 3ds Max para unir todas las piezas, texturizar con imágenes propias o de Google, iluminar y renderizar.',
    highlights: [
      localizedText('🏰 Escenario completo modelado desde cero', '🏰 Full environment modeled from scratch'),
      localizedText('🎨 Texturizado en 3dsMax', '🎨 Texturing in 3ds Max'),
      localizedText('⚡ Optimización de polígonos para videojuegos', '⚡ Polygon optimization for games'),
      localizedText('💡 Iluminación avanzada con 3ds Max', '💡 Advanced lighting with 3ds Max'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Primer proyecto de la asignatura Diseño 3D. El objetivo era modelar un escenario posible para un videojuego, aprendiendo herramientas como Sketchup y 3ds Max desde cero.',
          'First project of the 3D Design course. The goal was to model a possible scenario for a video game, learning tools like Sketchup and 3ds Max from scratch.'
        ),
      },
      {
        kind: 'objective',
        icon: 'target',
        text: localizedText(
          'Diseñar modelos en Sketchup o 3ds Max, exportarlos a 3ds Max para unificar el concepto, texturizar con imágenes propias o de Google, iluminar y renderizar la escena final.',
          'Design models in Sketchup or 3ds Max, export them to 3ds Max to unify the concept, texture with custom or Google images, light and render the final scene.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Modelé cada elemento del escenario por separado, los exporté a 3ds Max para montar la escena completa, apliqué texturizado profesional y configuré la iluminación para dar vida al entorno.',
          'I modeled each element of the scenario separately, exported them to 3ds Max to assemble the complete scene, applied professional texturing and configured lighting to bring the environment to life.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Este proyecto sentó mis bases en modelado 3D, texturizado y optimización de assets. Aprendí la importancia de la iluminación en la ambientación y cómo preparar escenarios para motores de videojuegos.',
          'This project laid my foundations in 3D modeling, texturing and asset optimization. I learned the importance of lighting in atmosphere creation and how to prepare scenarios for game engines.'
        ),
      },
    ],
    skillGains: [
      localizedText('Modelado 3D con Sketchup', '3D Modeling with Sketchup'),
      localizedText('Texturizado profesional', 'Professional texturing'),
      localizedText('Iluminación en 3ds Max', 'Lighting in 3ds Max'),
      localizedText('Optimización de polígonos', 'Polygon optimization'),
    ],
    tags: ['Modelado 3D', 'Exportación', 'Texturización'],
    subjects: ['Diseño 3D'],
    coverImage: '/images/projects/2021-22/diseno-3d/fantasy-island/fantasyisland_portada.png',
    galleryImages: [
      '/images/projects/2021-22/diseno-3d/fantasy-island/fantasyisland1.png',
      '/images/projects/2021-22/diseno-3d/fantasy-island/fantasyisland2.png',
      '/images/projects/2021-22/diseno-3d/fantasy-island/fantasyisland3.png',
      '/images/projects/2021-22/diseno-3d/fantasy-island/fantasyisland4.png',
      '/images/projects/2021-22/diseno-3d/fantasy-island/fantasyisland5.png',
      '/images/projects/2021-22/diseno-3d/fantasy-island/fantasyisland6.png',
      '/images/projects/2021-22/diseno-3d/fantasy-island/fantasyisland7.png',
      '/images/projects/2021-22/diseno-3d/fantasy-island/fantasyisland8.png',
    ],
    galleryConfig: { columns: 2, gap: 'small', layout: 'masonry' },
    featured: false,
    role: 'Artista 3D, Modelador y Texturizador',
    team: 'Proyecto académico personal - Individual',
    duration: '4 meses',
    learnings: 'Perfeccioné mis habilidades en modelado 3D y texturizado. Aprendí a optimizar assets para motores de videojuegos. Descubrí la importancia de la iluminación en la ambientación.',
    status: 'completado',
    technologies: [
      { name: 'Sketchup', level: 'principal' },
      { name: '3ds Max', level: 'principal' },
    ],
    disciplines: ['modelado-3d'],
  };
