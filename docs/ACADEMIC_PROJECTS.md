# Inventario académico del portfolio

Este documento es la **referencia legible** del catálogo de asignaturas del grado y de qué proyecto (si lo hay) tiene cada una. La fuente de verdad *programática* (la que usa el código, aunque no se renderiza en la web pública) es:

- `src/data/academic-catalog.ts`

Si algo aquí y en `academic-catalog.ts` no coincide, **gana `academic-catalog.ts`** y hay que actualizar este documento para que vuelva a coincidir. No mantengas una tercera lista en ningún otro sitio.

Los datos reales de cada proyecto (título, descripción, imágenes, enlaces...) viven en:

- `src/data/projects/entries/<slug>.ts`

## Cómo leer el estado de una asignatura

- **`documentado`** → el proyecto existe, tiene archivo propio y `publicable: true`. Aparece en la web.
- **`incompleto`** → hay archivo(s) de proyecto (`publicable: false`), seleccionado para preparar, pendiente de contenido (imágenes, enlaces...).
- **`candidato-investigacion`** → pista de trabajo interesante. **No tiene archivo de proyecto todavía** y no debe inventarse contenido para él.
- **`sin-proyecto`** → la asignatura no tiene (ni va a tener) un proyecto propio: solo ejercicios genéricos de clase.

---

## Selección definitiva (cierre de selección académica)

### 1. Proyectos publicados (16)
Ya en la web, con `publicable: true`: `alien-rush`, `astrofury`, `fantasy-island`, `flappy-chef`, `go-for-sports`, `gorobeia`, `histeria`, `hit-and-ufo`, `international-warfare`, `menteando`, `raki`, `raki-animacion`, `redes-sociales`, `si-senor-oscuro`, `whispers-of-shadows`, `yumala`.

### 2. Proyectos seleccionados pero ocultos, pendientes de contenido (19)
Tienen archivo `.ts` (`publicable: false`) **y carpeta de assets ya creada** en `public/images/projects/{curso}/{asignatura}/{slug}/`, lista para que guardes material:

- **Primero**: `fly-fumigator`, `willy-fog`, `michael-soffield-the-rescue`
- **Segundo**: `retrato-de-carla`, `terra-trolls`, `animales-y-plantas-fantasticos`, `figura-femenina-con-armadura`, `investigacion-ratchet-and-clank`, `juego-de-la-vida`, `fabrica`, `rompecubos`, `zombierush`
- **Tercero**: `practica-a-estrella`, `entrenamiento-q-learning`, `entornos-multijugador`, `proyecto-valorant-datos`
- **Cuarto**: `personaje-dj-autonomo`, `quest`, `wordle`

### 3. Creados anteriormente pero NO incluidos en esta selección definitiva (4)
Tienen archivo `.ts` oculto (siguen existiendo, no se han borrado), pero **no están en la lista de proyectos a preparar que confirmaste** y por eso **no se les ha creado carpeta de assets**: `bingo` (Programación Visual), `producto-haptico-startup` (Empresa y Videojuegos), `storyboard-escena-literaria` (Lenguaje Audiovisual y Medios Interactivos), `presentacion-directx12` (Procesadores Gráficos Avanzados). Pendiente de decidir si se archivan/eliminan o se mantienen como backlog para una futura selección.

### 4. Trabajos interesantes pendientes de investigar (4)
**No son proyectos** (no tienen archivo `.ts`, no se les inventa descripción ni contenido). Tienen una carpeta provisional en `public/images/pendientes-investigacion/{curso}/{asignatura}/` para ir guardando pistas/material hasta que se pueda definir un proyecto real:

- Estadística (Segundo) — posibles prácticas con R.
- Modelado Geométrico (Primero) — operaciones con matrices, transformaciones y rotaciones de objetos 3D; software usado pendiente de confirmar.
- Informática Gráfica (Segundo) — prácticas de programación gráfica, gráficos 3D y APIs, pendientes de identificar.
- Narración, Guion y Storyboard (Primero) — colección de análisis de videojuegos realizados durante la asignatura (aparte del proyecto `michael-soffield-the-rescue`, que sí está confirmado).

Ver `public/images/pendientes-investigacion/README.md` para cómo promocionar uno de estos a proyecto real cuando esté suficientemente identificado.

---

## Primero (2021-22)

| Asignatura | Proyecto(s) | Estado | Observaciones |
|---|---|---|---|
| Diseño Digital 2D | `yumala` (publicado), `fly-fumigator`, `willy-fog` (seleccionados, ocultos) | incompleto | Animación de pelota botando = ejercicio genérico, sin archivo propio |
| Física para Videojuegos | — | sin-proyecto | Ejercicios de muelles, circuitos lógicos y cañón |
| Matemática Discreta | — | sin-proyecto | Ejercicios de matrices |
| Narración, Guion y Storyboard | `michael-soffield-the-rescue` (seleccionado, oculto) | incompleto | + candidato de investigación aparte: colección de análisis de videojuegos (ver tabla de candidatos) |
| Programación Visual | `bingo` (oculto, **no incluido en la selección**) | incompleto | Prácticas Java genéricas sin proyecto propio |
| Diseño Digital 3D | `fantasy-island`, `raki` (publicados) | documentado | |
| Estructuras de Datos | — | sin-proyecto | |
| Fundamentos del Diseño y la Jugabilidad | `international-warfare` (publicado) | documentado | Asignatura principal |
| Modelado Geométrico | — | candidato-investigacion | Matrices, transformaciones y rotaciones 3D; software pendiente de confirmar |
| Multimedia | `international-warfare` (publicado) | documentado | Asignatura secundaria |
| Principios Jurídicos Básicos | — | sin-proyecto | |

## Segundo (2022-23)

| Asignatura | Proyecto(s) | Estado | Observaciones |
|---|---|---|---|
| Bases de Datos | — | sin-proyecto | Ejercicios SQL / BD relacional y no relacional |
| Dibujo Artístico | `retrato-de-carla`, `terra-trolls`, `animales-y-plantas-fantasticos`, `figura-femenina-con-armadura`, `investigacion-ratchet-and-clank` (seleccionados, ocultos) | incompleto | Estudios anatómicos genéricos sin identidad propia siguen sin proyecto |
| Estadística | — | candidato-investigacion | Posibles prácticas con R |
| Fundamentos de Tecnología de Videojuegos | `juego-de-la-vida`, `fabrica`, `rompecubos` (seleccionados, ocultos) | incompleto | Tecnología (HTML/CSS/JS/¿Phaser3?) sin confirmar |
| Informática Gráfica | — | candidato-investigacion | Programación gráfica, gráficos 3D y APIs, pendientes de identificar |
| Programación Avanzada | `zombierush` (seleccionado, oculto) | incompleto | Herencia/polimorfismo/modelos 3D = observación |
| Arquitecturas Gráficas | — | sin-proyecto | Prácticas de ensamblador y lógica |
| Empresa y Videojuegos | `producto-haptico-startup` (oculto, **no incluido en la selección**) | incompleto | |
| Introducción a los Métodos Matemáticos y Numéricos | — | sin-proyecto | Prácticas MATLAB sin identificar |
| Proceso de Desarrollo de Videojuegos | `si-senor-oscuro` (publicado) | documentado | |

## Tercero (2023-24)

| Asignatura | Proyecto(s) | Estado | Observaciones |
|---|---|---|---|
| Desarrollo de Juegos con Inteligencia Artificial | `practica-a-estrella`, `entrenamiento-q-learning` (seleccionados, ocultos) | incompleto | |
| Ingeniería de Videojuegos | `astrofury` (publicado) | documentado | |
| Interacción Persona-Máquina y Usabilidad | `go-for-sports` (publicado) | documentado | |
| Juegos en Red | `hit-and-ufo` (2023-24), `alien-rush` (2024-25) | documentado | Misma asignatura cursada en dos años por repetición; se conservan sus años reales |
| Lenguaje Audiovisual y Medios Interactivos | `storyboard-escena-literaria` (oculto, **no incluido en la selección**) | incompleto | |
| Procesadores Gráficos Avanzados | `presentacion-directx12` (oculto, **no incluido en la selección**) | incompleto | |
| Algoritmos para Juegos | — | sin-proyecto | Prácticas Python y algoritmos |
| Entornos Multijugador | `entornos-multijugador` (seleccionado, oculto) | incompleto | Año académico exacto incierto (posible repetición) |
| Gestión de Datos en Medios Digitales | `proyecto-valorant-datos` (seleccionado, oculto) | incompleto | |
| Personajes y Escenarios | `gorobeia` (publicado) | documentado | |
| Sonido y Música para Videojuegos | — | sin-proyecto | Edición/unión de sonidos |

## Cuarto (2024-25)

| Asignatura | Proyecto(s) | Estado | Observaciones |
|---|---|---|---|
| Comportamiento de Personajes | `personaje-dj-autonomo` (seleccionado, oculto) | incompleto | |
| Diseño Visual y Arte Final | `whispers-of-shadows` (publicado) | documentado | |
| Desarrollo de Aplicaciones para Dispositivos Móviles | `flappy-chef` (publicado), `quest`, `wordle` (seleccionados, ocultos) | incompleto | |
| Gestión y Dirección de Proyectos | `histeria` (publicado) | documentado | Asignatura secundaria |
| Juegos para Web y Redes Sociales | `histeria` (publicado) | documentado | Asignatura principal |

## Fuera del catálogo de asignaturas

- `menteando` — Trabajo de Fin de Grado (2025-26), no asociado a ninguna asignatura.
- `redes-sociales` — proyecto freelance (2024-25), no asociado a ninguna asignatura.

---

## Cómo mantener esto al día

### Añadir un proyecto nuevo
1. Crea `src/data/projects/entries/<slug>.ts` exportando un `ProjectInput` (mira cualquier archivo existente como plantilla).
2. Mínimo imprescindible: `slug`, `year`, `type`, `title`, `description`, `tags`, `featured`, `disciplines`.
3. Añade `publicable: false` si todavía no tiene material suficiente.
4. Impórtalo y añádelo al array `rawProjects` en `src/data/projects/index.ts`.
5. Actualiza la fila correspondiente en `src/data/academic-catalog.ts` (y en este documento) para enlazar el `slug` con su asignatura.
6. Crea su carpeta `public/images/projects/{curso}/{asignatura-principal}/{slug}/` (ver más abajo).

### Promocionar un candidato de investigación a proyecto
Ver `public/images/pendientes-investigacion/README.md`.

### Añadir imágenes
1. Guarda los ficheros en `public/images/projects/{curso}/{asignatura-principal}/{slug}/` (nombres en minúsculas, sin tildes, con guiones; no renombres imágenes ya subidas). Las carpetas de los 19 proyectos seleccionados ya existen y están vacías (con `.gitkeep`) — guarda directamente ahí, sin subcarpetas por tipo de archivo.
2. En el archivo del proyecto, añade `coverImage` (portada) y `galleryImages` (o `gallery` con items `{ type: 'image', src: '...' }` si quieres más control, p.ej. mezclarlas con vídeos).

### Añadir vídeos
- **Vídeo como contenido principal** (p.ej. una animación que no necesita galería): añade `featuredMedia: { type: 'video', src: '...' }` — admite una ruta local o una URL de YouTube/Vimeo.
- **Vídeo dentro de la galería** (mezclado con imágenes): añade un item `{ type: 'video', src: '...', poster: '...' }` dentro de `gallery` (usa `gallery`, no `galleryImages`, en cuanto mezcles tipos).
- **Vídeo como recurso aparte**: añádelo a `resources` como `{ type: 'video', url: '...', title: 'Vídeo explicativo' }`. `resources` es un **array**: si lo defines explícito, sustituye por completo a los enlaces derivados de `links`/`externalLinks`, así que incluye ahí también los demás enlaces que quieras conservar.

### Añadir PDFs
Añade un item a `resources`: `{ type: 'pdf', url: '...', title: 'Memoria' }`. Si la URL es un enlace de descarga de Google Drive (`...?id=XXXX`), se detecta automáticamente y se muestra como vista previa incrustada; para forzar solo enlace externo añade `display: 'link'` al item.

### Añadir enlaces (GitHub, itch.io, demo, web...)
Añádelos a `resources` como `{ type: 'link', url: '...', title: '...' }`. El tipo de tarjeta (GitHub, juego, web...) se detecta automáticamente por la URL.

### Cambiar `publicable` a `true`
Cuando el proyecto ya tenga al menos portada y la información mínima, cambia `publicable: false` a `publicable: true` (o elimina la línea, `true` es el valor por defecto) en su archivo `entries/<slug>.ts`. Pasará a aparecer en el listado, en destacados, en los filtros y generará su página pública automáticamente.

### Asociar varias asignaturas
Usa el array `subjects: ['Asignatura principal', 'Asignatura secundaria']` — el primer elemento se considera la asignatura principal (se usa, entre otras cosas, para la carpeta de assets). Ejemplo real: `histeria` tiene `subjects: ['Juegos para Web y Redes Sociales', 'Gestión y Dirección de Proyectos']` y un único `resources` (sin duplicar recursos entre asignaturas).

### Añadir una asignatura nueva al catálogo
Añade una fila al array `ACADEMIC_CATALOG` en `src/data/academic-catalog.ts` (y la fila equivalente en este documento) con `degreeYear`, `academicYear`, `subject`, `projectSlugs` y `status`.
