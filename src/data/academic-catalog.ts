// src/data/academic-catalog.ts
// Catálogo de TODAS las asignaturas del grado, documentadas o no. Es la
// fuente de verdad de qué asignatura tiene qué proyecto (o ninguno todavía).
// No se usa para renderizar la web pública: es un inventario de mantenimiento
// para quien edite el portfolio. La relación inversa (proyecto -> asignatura)
// vive en el campo `subjects` de cada `src/data/projects/entries/<slug>.ts`.

export type DocumentationStatus =
  | 'documentado'              // tiene proyecto público (publicable: true)
  | 'incompleto'                // tiene proyecto(s) oculto(s) (publicable: false), seleccionado, pendiente de contenido
  | 'candidato-investigacion'    // pista de trabajo interesante, SIN archivo de proyecto todavía (no inventar contenido)
  | 'sin-proyecto';              // la asignatura no tiene (ni tendrá) un proyecto propio

export interface AcademicSubjectEntry {
  degreeYear: 'Primero' | 'Segundo' | 'Tercero' | 'Cuarto';
  academicYear: string; // mismo formato que Project.academicYear, p.ej. '2021-22'
  subject: string;
  /** Slugs de src/data/projects/entries/<slug>.ts relacionados con esta asignatura. */
  projectSlugs: string[];
  status: DocumentationStatus;
  notes?: string;
  /**
   * Carpeta provisional (fuera de public/images/projects) donde guardar
   * material de un candidato de investigación mientras no sea un proyecto.
   */
  researchFolder?: string;
}

export const ACADEMIC_CATALOG: AcademicSubjectEntry[] = [
  // ============================== PRIMERO (2021-22) ==============================
  {
    degreeYear: 'Primero', academicYear: '2021-22', subject: 'Diseño Digital 2D',
    projectSlugs: ['yumala', 'fly-fumigator', 'willy-fog'],
    status: 'incompleto',
    notes: 'Yumala documentado y publicado. Fly Fumigator y Willy Fog seleccionados y ocultos (sin material/tecnología confirmada). La práctica de animación de una pelota botando es un ejercicio genérico y no tiene archivo de proyecto propio.',
  },
  {
    degreeYear: 'Primero', academicYear: '2021-22', subject: 'Física para Videojuegos',
    projectSlugs: [], status: 'sin-proyecto',
    notes: 'Ejercicios de muelles, circuitos lógicos y cañón. Prácticas genéricas, sin proyecto propio.',
  },
  {
    degreeYear: 'Primero', academicYear: '2021-22', subject: 'Matemática Discreta',
    projectSlugs: [], status: 'sin-proyecto', notes: 'Ejercicios de matrices. Sin proyecto propio.',
  },
  {
    degreeYear: 'Primero', academicYear: '2021-22', subject: 'Narración, Guion y Storyboard',
    projectSlugs: ['michael-soffield-the-rescue'],
    status: 'incompleto',
    notes: 'Michael Soffield: The Rescue seleccionado y oculto. Además, la colección de análisis de videojuegos realizados durante la asignatura es un candidato de investigación aparte (no es un proyecto): material provisional en researchFolder.',
    researchFolder: 'public/images/pendientes-investigacion/2021-22/narracion-guion-storyboard',
  },
  {
    degreeYear: 'Primero', academicYear: '2021-22', subject: 'Programación Visual',
    projectSlugs: ['bingo'],
    status: 'incompleto',
    notes: 'Bingo (práctica final) tiene archivo de proyecto oculto, pero NO está en la selección definitiva de proyectos a preparar (confirmado por el usuario) — no se le crea carpeta de assets todavía. Las prácticas Java genéricas no tienen proyecto propio.',
  },
  {
    degreeYear: 'Primero', academicYear: '2021-22', subject: 'Diseño Digital 3D',
    projectSlugs: ['fantasy-island', 'raki'], status: 'documentado',
  },
  {
    degreeYear: 'Primero', academicYear: '2021-22', subject: 'Estructuras de Datos',
    projectSlugs: [], status: 'sin-proyecto', notes: 'Sin proyecto definido.',
  },
  {
    degreeYear: 'Primero', academicYear: '2021-22', subject: 'Fundamentos del Diseño y la Jugabilidad',
    projectSlugs: ['international-warfare'], status: 'documentado', notes: 'Asignatura principal de International Warfare.',
  },
  {
    degreeYear: 'Primero', academicYear: '2021-22', subject: 'Modelado Geométrico',
    projectSlugs: [], status: 'candidato-investigacion',
    notes: 'Operaciones con matrices, transformaciones y rotaciones de objetos 3D. Software usado pendiente de confirmar. Candidato de investigación: aún no es un proyecto, no inventar contenido.',
    researchFolder: 'public/images/pendientes-investigacion/2021-22/modelado-geometrico',
  },
  {
    degreeYear: 'Primero', academicYear: '2021-22', subject: 'Multimedia',
    projectSlugs: ['international-warfare'], status: 'documentado', notes: 'Asignatura secundaria de International Warfare (web, música, tráiler, crowdfunding).',
  },
  {
    degreeYear: 'Primero', academicYear: '2021-22', subject: 'Principios Jurídicos Básicos',
    projectSlugs: [], status: 'sin-proyecto',
  },

  // ============================== SEGUNDO (2022-23) ==============================
  {
    degreeYear: 'Segundo', academicYear: '2022-23', subject: 'Bases de Datos',
    projectSlugs: [], status: 'sin-proyecto', notes: 'Ejercicios SQL y bases de datos relacionales/no relacionales. Sin proyecto propio.',
  },
  {
    degreeYear: 'Segundo', academicYear: '2022-23', subject: 'Dibujo Artístico',
    projectSlugs: ['retrato-de-carla', 'terra-trolls', 'animales-y-plantas-fantasticos', 'figura-femenina-con-armadura', 'investigacion-ratchet-and-clank'],
    status: 'incompleto',
    notes: 'Cinco trabajos seleccionados y ocultos, pendientes de contenido. Los estudios anatómicos genéricos (sin identidad propia) siguen sin proyecto.',
  },
  {
    degreeYear: 'Segundo', academicYear: '2022-23', subject: 'Estadística',
    projectSlugs: [], status: 'candidato-investigacion',
    notes: 'Posibles prácticas con R. Candidato de investigación: aún no es un proyecto, no inventar contenido.',
    researchFolder: 'public/images/pendientes-investigacion/2022-23/estadistica',
  },
  {
    degreeYear: 'Segundo', academicYear: '2022-23', subject: 'Fundamentos de Tecnología de Videojuegos',
    projectSlugs: ['juego-de-la-vida', 'fabrica', 'rompecubos'],
    status: 'incompleto',
    notes: 'Tecnología de cada práctica (HTML/CSS/JS/Phaser3) sin confirmar; no se atribuye en los proyectos ocultos.',
  },
  {
    degreeYear: 'Segundo', academicYear: '2022-23', subject: 'Informática Gráfica',
    projectSlugs: [], status: 'candidato-investigacion',
    notes: 'Prácticas de programación gráfica, gráficos 3D y APIs, pendientes de identificar. Candidato de investigación: aún no es un proyecto, no inventar contenido.',
    researchFolder: 'public/images/pendientes-investigacion/2022-23/informatica-grafica',
  },
  {
    degreeYear: 'Segundo', academicYear: '2022-23', subject: 'Programación Avanzada',
    projectSlugs: ['zombierush'],
    status: 'incompleto',
    notes: 'ZombieRush (C++, POO) seleccionado y oculto. Otras prácticas de herencia, polimorfismo y modelos 3D quedan como observación.',
  },
  {
    degreeYear: 'Segundo', academicYear: '2022-23', subject: 'Arquitecturas Gráficas',
    projectSlugs: [], status: 'sin-proyecto', notes: 'Prácticas de ensamblador y lógica. Sin proyecto propio.',
  },
  {
    degreeYear: 'Segundo', academicYear: '2022-23', subject: 'Empresa y Videojuegos',
    projectSlugs: ['producto-haptico-startup'], status: 'incompleto',
    notes: 'Tiene archivo de proyecto oculto, pero NO está en la selección definitiva de proyectos a preparar (confirmado por el usuario) — no se le crea carpeta de assets todavía.',
  },
  {
    degreeYear: 'Segundo', academicYear: '2022-23', subject: 'Introducción a los Métodos Matemáticos y Numéricos',
    projectSlugs: [], status: 'sin-proyecto', notes: 'Prácticas MATLAB sin identificar.',
  },
  {
    degreeYear: 'Segundo', academicYear: '2022-23', subject: 'Proceso de Desarrollo de Videojuegos',
    projectSlugs: ['si-senor-oscuro'], status: 'documentado',
  },

  // ============================== TERCERO (2023-24) ==============================
  {
    degreeYear: 'Tercero', academicYear: '2023-24', subject: 'Desarrollo de Juegos con Inteligencia Artificial',
    projectSlugs: ['practica-a-estrella', 'entrenamiento-q-learning'], status: 'incompleto',
  },
  {
    degreeYear: 'Tercero', academicYear: '2023-24', subject: 'Ingeniería de Videojuegos',
    projectSlugs: ['astrofury'], status: 'documentado',
  },
  {
    degreeYear: 'Tercero', academicYear: '2023-24', subject: 'Interacción Persona-Máquina y Usabilidad',
    projectSlugs: ['go-for-sports'], status: 'documentado',
  },
  {
    degreeYear: 'Tercero', academicYear: '2023-24', subject: 'Juegos en Red',
    projectSlugs: ['hit-and-ufo', 'alien-rush'], status: 'documentado',
    notes: 'Hitt and UFO (2023-24) y Alien Rush (2024-25): la misma asignatura se cursó en dos años académicos distintos por repetición. Se conservan sus años reales.',
  },
  {
    degreeYear: 'Tercero', academicYear: '2023-24', subject: 'Lenguaje Audiovisual y Medios Interactivos',
    projectSlugs: ['storyboard-escena-literaria'], status: 'incompleto',
    notes: 'Tiene archivo de proyecto oculto, pero NO está en la selección definitiva de proyectos a preparar (confirmado por el usuario) — no se le crea carpeta de assets todavía.',
  },
  {
    degreeYear: 'Tercero', academicYear: '2023-24', subject: 'Procesadores Gráficos Avanzados',
    projectSlugs: ['presentacion-directx12'], status: 'incompleto',
    notes: 'Tiene archivo de proyecto oculto, pero NO está en la selección definitiva de proyectos a preparar (confirmado por el usuario) — no se le crea carpeta de assets todavía.',
  },
  {
    degreeYear: 'Tercero', academicYear: '2023-24', subject: 'Algoritmos para Juegos',
    projectSlugs: [], status: 'sin-proyecto', notes: 'Prácticas Python y algoritmos. Sin proyecto propio.',
  },
  {
    degreeYear: 'Tercero', academicYear: '2023-24', subject: 'Entornos Multijugador',
    projectSlugs: ['entornos-multijugador'], status: 'incompleto',
    notes: 'Año académico exacto incierto (posible repetición de curso); se usa 2023-24 por defecto para Tercero, a confirmar.',
  },
  {
    degreeYear: 'Tercero', academicYear: '2023-24', subject: 'Gestión de Datos en Medios Digitales',
    projectSlugs: ['proyecto-valorant-datos'], status: 'incompleto',
  },
  {
    degreeYear: 'Tercero', academicYear: '2023-24', subject: 'Personajes y Escenarios',
    projectSlugs: ['gorobeia'], status: 'documentado',
  },
  {
    degreeYear: 'Tercero', academicYear: '2023-24', subject: 'Sonido y Música para Videojuegos',
    projectSlugs: [], status: 'sin-proyecto', notes: 'Prácticas de edición/unión de sonidos. Sin proyecto propio.',
  },

  // ============================== CUARTO (2024-25) ==============================
  {
    degreeYear: 'Cuarto', academicYear: '2024-25', subject: 'Comportamiento de Personajes',
    projectSlugs: ['personaje-dj-autonomo'], status: 'incompleto',
  },
  {
    degreeYear: 'Cuarto', academicYear: '2024-25', subject: 'Diseño Visual y Arte Final',
    projectSlugs: ['whispers-of-shadows'], status: 'documentado',
  },
  {
    degreeYear: 'Cuarto', academicYear: '2024-25', subject: 'Desarrollo de Aplicaciones para Dispositivos Móviles',
    projectSlugs: ['flappy-chef', 'quest', 'wordle'], status: 'incompleto',
    notes: 'Flappy Chef documentado y publicado. Quest y Wordle identificados pero ocultos.',
  },
  {
    degreeYear: 'Cuarto', academicYear: '2024-25', subject: 'Gestión y Dirección de Proyectos',
    projectSlugs: ['histeria'], status: 'documentado', notes: 'Asignatura secundaria de Histeria.',
  },
  {
    degreeYear: 'Cuarto', academicYear: '2024-25', subject: 'Juegos para Web y Redes Sociales',
    projectSlugs: ['histeria'], status: 'documentado', notes: 'Asignatura principal de Histeria.',
  },
];

/** Proyectos que no pertenecen al catálogo de asignaturas (TFG, freelance, personales...). */
export const NON_ACADEMIC_PROJECTS: { slug: string; note: string }[] = [
  { slug: 'menteando', note: 'Trabajo de Fin de Grado (2025-26), no asociado a una asignatura.' },
  { slug: 'redes-sociales', note: 'Proyecto freelance (2024-25), no asociado a una asignatura.' },
];
