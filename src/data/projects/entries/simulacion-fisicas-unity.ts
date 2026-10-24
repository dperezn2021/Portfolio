// src/data/projects/entries/simulacion-fisicas-unity.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2023-24/animacion-3d/simulacion-fisicas-unity';

export const simulacionFisicasUnity: ProjectInput = {
  slug: 'simulacion-fisicas-unity',
  year: 2024,
  academicYear: '2023-24',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Simulación de físicas en Unity',
  description: 'Cuatro prácticas de simulación física en Unity: dos telas, una estructura piramidal de nodos y resortes y un árbol sometido al viento. Cada práctica se probó modificando parámetros como la gravedad, la masa de los nodos o el viento.',
  highlights: [
    localizedText('🧵 Tela suspendida de dos cubos y tela fijada como una bandera', '🧵 Cloth hanging from two cubes and cloth fixed like a flag'),
    localizedText('🔺 Estructura piramidal de nodos unidos por resortes', '🔺 Pyramidal structure of nodes joined by springs'),
    localizedText('🌳 Árbol 3D movido por el viento en la práctica final', '🌳 3D tree moved by the wind in the final assignment'),
    localizedText('🎛️ Experimentación con gravedad, masa de nodos y viento', '🎛️ Experiments with gravity, node mass and wind'),
  ],
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Prácticas de la segunda parte de la asignatura Animación 3D, dedicada a la simulación física de mallas, nodos, resortes y estructuras deformables en Unity. Es un trabajo independiente de Raki Animación, aunque comparta asignatura.',
        'Assignments from the second part of the 3D Animation course, focused on physics simulation of meshes, nodes, springs and deformable structures in Unity. It is separate from Raki Animación, although it belongs to the same course.'
      ),
    },
    {
      kind: 'objective',
      icon: 'flag',
      text: localizedText(
        'Observar cómo cambia el comportamiento de cada simulación al modificar parámetros como la gravedad, la masa de los nodos y el viento.',
        'Observe how each simulation behaves when parameters such as gravity, node mass and wind are changed.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Una tela suspendida de dos cubos por sus puntos superiores, la misma tela fijada a un soporte rectangular como una bandera, una estructura piramidal de nodos y resortes conectada a un soporte superior, y, como práctica final, un modelo 3D de árbol movido por el viento.',
        'A cloth hanging from two cubes by its upper points, a cloth fixed to a rectangular support like a flag, a pyramidal structure of nodes and springs connected to an upper support, and, as the final assignment, a 3D tree model moved by the wind.'
      ),
    },
  ],
  skillGains: [
    localizedText('Simulación de telas y estructuras deformables', 'Cloth and deformable structure simulation'),
    localizedText('Ajuste de parámetros físicos (gravedad, masa, viento)', 'Tuning physical parameters (gravity, mass, wind)'),
  ],
  en: {
    title: 'Physics simulation in Unity',
    description: 'Four physics simulation assignments in Unity: two cloths, a pyramidal structure of nodes and springs and a tree under wind. Each one was tested by changing parameters such as gravity, node mass or wind.',
  },
  tags: ['Simulación física', 'Unity', 'Animación 3D'],
  subjects: ['Animación 3D'],
  disciplines: ['animacion-3d'],
  technologies: [
    { name: 'Unity', level: 'principal' },
  ],
  publicable: true,
  featured: false,
  status: 'completado',
  coverImage: `${BASE}/arbol-viento-poster.jpg`,
  gallery: [
    { type: 'video', src: `${BASE}/tela-suspendida.mp4`, poster: `${BASE}/tela-suspendida-poster.jpg`, title: 'Tela suspendida de dos cubos', titleEn: 'Cloth hanging from two cubes' },
    { type: 'video', src: `${BASE}/tela-bandera.mp4`, poster: `${BASE}/tela-bandera-poster.jpg`, title: 'Tela fijada a un soporte, como una bandera', titleEn: 'Cloth fixed to a support, like a flag' },
    { type: 'video', src: `${BASE}/estructura-piramidal.mp4`, poster: `${BASE}/estructura-piramidal-poster.jpg`, title: 'Estructura piramidal de nodos y resortes', titleEn: 'Pyramidal structure of nodes and springs' },
    { type: 'video', src: `${BASE}/arbol-viento.mp4`, poster: `${BASE}/arbol-viento-poster.jpg`, title: 'Práctica final: árbol sometido al viento', titleEn: 'Final assignment: tree under wind' },
  ],
  galleryConfig: { columns: 2, gap: 'medium', layout: 'masonry' },
};
