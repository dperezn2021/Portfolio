# Chuleta: cómo editar un proyecto

**Dónde:** `src/data/projects/entries/<slug>.ts`. Si es nuevo, impórtalo y añádelo a `rawProjects` en `src/data/projects/index.ts`, y enlaza su asignatura en `docs/ACADEMIC_PROJECTS.md`.

## Orden canónico de campos

Todos los `entries/*.ts` declaran sus campos en este orden (así es fácil compararlos). Los que no apliquen se omiten, el orden no cambia.

```ts
// src/data/projects/entries/mi-proyecto.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2023-24/asignatura/mi-proyecto';   // atajo opcional de la carpeta de imágenes

export const miProyecto: ProjectInput = {
  // — Identidad —
  slug: 'mi-proyecto',            // OBLIGATORIO · URL, carpeta y prefijo de traducciones; no lo cambies
  year: 2024,                     // OBLIGATORIO · se muestra y alimenta el filtro por año
  academicYear: '2023-24',        // opcional · curso; sin él: "Personal / sin año académico"
  context: 'grado',               // opcional · 'grado' | 'master' | 'personal' | 'laboral' (filtro); por defecto 'personal'
  type: 'Proyecto de la Universidad', // OBLIGATORIO · etiqueta del tipo (ver abajo)
  title: 'Mi proyecto',           // OBLIGATORIO

  // — Textos —
  description: '…',               // OBLIGATORIO · descripción breve
  challenges: '…',                // opcional · NO se muestra en la página (solo respaldo/traducciones)
  solution: '…',                  // opcional · NO se muestra en la página
  highlights: [localizedText('🎮 Algo destacable', '🎮 Something notable')],   // opcional
  story: [                        // opcional · hasta 4 bloques
    { kind: 'context', icon: 'school', text: localizedText('es', 'en') },
    // 'objective' (flag/target) · 'implementation' (deployed_code) · 'learning' (insights/bolt)
  ],
  skillGains: [localizedText('Habilidad', 'Skill')],   // opcional

  // — Clasificación —
  tags: ['Unity', 'Game Design'], // OBLIGATORIO · se muestran en la página; 2 en la tarjeta
  subjects: ['Asignatura principal', 'Secundaria'],   // opcional · la primera es la principal
  disciplines: ['videojuegos'],   // OBLIGATORIO · claves de la lista de abajo
  technologies: [{ name: 'Unity', level: 'principal' }],   // opcional · 'principal' | 'secundaria' | 'experimental'

  // — Visibilidad —
  publicable: true,               // opcional (true por defecto) · false = sin página, listados ni filtros
  featured: false,                // OBLIGATORIO · true = aparece en destacados de la home (si publicable)
  status: 'completado',           // opcional · 'completado' | 'en-desarrollo' | 'prototipo' | 'pausado'

  // — Multimedia —
  coverImage: `${BASE}/portada.png`,   // obligatorio si publicable (portada de la tarjeta)
  featuredMedia: { type: 'video', src: `${BASE}/video.mp4`, poster: `${BASE}/poster.jpg`, title: 'Vídeo' },   // opcional
  gallery: [                      // opcional · SOLO imágenes y vídeos
    { type: 'image', src: `${BASE}/captura1.png`, alt: 'Pantalla de inicio' },
    { type: 'video', src: `${BASE}/demo.mp4`, poster: `${BASE}/demo.jpg`, title: 'Demo' },
  ],
  galleryConfig: { columns: 3, gap: 'medium', layout: 'masonry' },   // opcional

  // — Recursos y enlaces —
  resources: [                    // opcional · PDFs, enlaces, juegos, prototipos
    { type: 'pdf', url: `${BASE}/memoria.pdf`, title: 'Memoria PDF' },
    { type: 'link', url: 'https://github.com/…', title: 'Código en GitHub' },
  ],

  // — Autoría —
  role: 'Programador',            // opcional · se muestra en "Rol"
  team: 'Proyecto académico grupal - 4 personas',   // opcional
  duration: '3 meses',            // opcional
  learnings: '…',                 // opcional · NO se muestra en la página
};
```

Verificado en el código: `challenges`, `solution` y `learnings` están en el tipo y en el diccionario, pero la página de detalle no los pinta; lo que se ve del "qué aprendí" es el bloque `learning` de `story`.

## Qué significa cada cosa

| Campo | Qué es |
|---|---|
| `slug` | Identificador único: URL `/proyectos/<slug>`, nombre de la carpeta de imágenes y prefijo de las claves `project.<slug>.*` que se generan para el cambio de idioma. |
| `BASE` | Solo una constante local (no es nada de Astro) con la carpeta de imágenes del proyecto; se usa como `` `${BASE}/foto.png` ``. Puedes escribir la ruta entera si prefieres. |
| `context` | Filtro del listado: `grado`, `master`, `personal`, `laboral`. |
| `type` | Etiqueta del tipo. Valores traducidos (`PROJECT_TYPE_KEYS`): `'Proyecto de la Universidad'`, `'Trabajo de Fin de Grado'`, `'Personal'`, `'Freelance'`. Otro texto se muestra tal cual, sin traducir. |
| `tags` | Texto libre. Con traducción (`TAG_KEYS`): Patrones de diseño, Modelado 3D, Exportación, Texturización, Ilustración, Desarrollo Cognitivo, Gamificación, Narrativa, Diseño Gráfico, Animación 3D, Personajes, Game Design. El resto sale igual en ES y EN. |
| `disciplines` | `videojuegos`, `red`, `aplicaciones`, `desarrollo-web`, `modelado-3d`, `animacion-2d`, `animacion-3d`, `ilustracion`, `diseño-2d`, `ux-ui`, `arquitectura`, `bases-datos`, `devops`, `analisis-datos`, `documentacion`, `ia`. Filtro y etiquetas de la tarjeta (3 primeras). |
| `technologies` | `level: 'principal'` añade una estrella; `secundaria` y `experimental` cambian el color de la etiqueta. |
| `status` | Insignia en la página; `completado` también cuenta en las estadísticas de la home. |
| `story` | `kind`: `context`, `objective`, `implementation`, `learning`. Cada bloque: `icon` + `text: localizedText(es, en)`. Si no tienes información, quita el bloque. |

## Multimedia: dónde va cada cosa

- **`featuredMedia`**: contenido principal de arriba. Acepta `image`, `video` (local, YouTube o Vimeo), `pdf`, `iframe`, `game` o `link`. Sin él, la portada hace de contenido principal. Si el mismo archivo está en `gallery`, no se duplica.
- **`gallery`**: solo `image` y `video` (los demás tipos se ignoran). Campos de cada ítem: `src`, `alt` (texto alternativo, solo en español), `title`, `poster` (miniatura de un vídeo).
- **`galleryConfig`**: se usan `columns` (1-5), `gap` (`small`/`medium`/`large`) y `layout` (`masonry`/`grid`/`featured`). `imageSize` y `aspectRatio` existen en el tipo pero **no los usa** `ProjectGallery.astro`.
- **`resources`**: `pdf`, `link`, `game`, `iframe`, `video`, `audio`. El tipo de tarjeta se infiere de la URL (YouTube/Vimeo, Figma `/proto/`, `.pdf`, GitHub, itch.io, Drive). `display: 'embed' | 'link'` fuerza incrustar o solo enlazar. Los PDF locales se incrustan.
- **Legado**: `galleryImages` (lista de rutas), `links` y `externalLinks` (`{ label, url }`) siguen funcionando: `index.ts` los convierte en `gallery` y `resources` si el proyecto no define estos últimos. Si defines `gallery` o `resources`, sustituyen a los derivados. Al editar un proyecto, migra a `gallery`/`resources`.
- **Rutas**: empiezan por `/images/...`; el prefijo `/Portfolio` se añade solo.

**Orden de la página:** cabecera → contenido principal y galería → recursos → historia → rol y contribuciones → habilidades y destacados. Las secciones vacías se ocultan solas.

## Reglas de archivos

- **Vídeos**: MP4 H.264 + AAC, máx. 1920×1080, `+faststart`, **menos de 100 MB** (mejor mucho menos). `scripts/optimize-videos.sh` codifica los originales de `Contenido_Porfolio/Videos/`; **omite cualquier destino que ya exista**, así que borra o mueve una copia antigua antes de volver a ejecutarlo.
- **Nombres**: minúsculas, sin tildes, con guiones, en `public/images/projects/{curso}/{asignatura-principal}/{slug}/`.
- **PDF**: antes de publicarlo, comprueba que no contiene datos personales de terceros (nombres, edades, contacto, salud) ni credenciales.
- `Contenido_Porfolio/` es solo referencia local: no se versiona.

## Textos y traducciones

Los textos del proyecto viven en su propia entrada (`src/data/projects/entries/<slug>.ts`): el español en `title`, `description`, `role`, `team`, `duration`, `challenges`, `solution`, `learnings`, y el inglés en el bloque `en: { ... }` con los mismos nombres. Las claves `project.<slug>.*` del diccionario (necesarias para el cambio de idioma en cliente) se generan solas a partir de ahí, así que no hay que tocar `translations.ts`; si falta un campo en `en`, se muestra el español. `story`, `highlights` y `skillGains` son bilingües dentro del propio `.ts`. Los títulos de recursos nuevos se traducen añadiéndolos a `LINK_KEYS` en `src/data/projects/translation-maps.ts` y al diccionario (`project.link.*`); los ya traducidos: Jugar, Vídeo Explicativo, Prototipo, Memoria PDF, Web Sealy Studio, Ir a la web, Descargar Video Demo, Descargar Memoria PDF (y los añadidos por proyecto).

## Antes de publicar (`publicable: true`)

- [ ] `coverImage` existe y es una imagen; hay al menos un recurso visual significativo.
- [ ] Descripción factual; autoría clara (individual/grupo, qué hice yo, qué es de otros).
- [ ] Todas las rutas existen y funcionan con `/Portfolio/`; ningún archivo supera 100 MB.
- [ ] Bloque `en` del proyecto actualizado si cambiaste textos en español.
- [ ] Fila de `docs/ACADEMIC_PROJECTS.md` actualizada.
- [ ] `npm run build` y `npx astro check` sin errores.

## Colecciones (BONK)

Una colección es un proyecto normal (`entries/bonk.ts`, **una sola tarjeta** y una sola cuenta en estadísticas y filtros) cuyos elementos hijos tienen página propia en `/proyectos/<proyecto>/<elemento>/`. Los hijos **no** están en `rawProjects`. Datos: `src/data/collections/bonk.ts` (tipos en `types.ts`, registro en `index.ts`); páginas: `src/pages/proyectos/[slug]/[game].astro` y `src/components/projects/CollectionGrid.astro`. Un proyecto sin portada (`coverImage`) usa un fondo neutro con el emoji de su disciplina.

- **Modificar un juego**: edita su objeto en `bonk.ts` (`summary` = tarjeta, `description` = introducción, `controls`, `mechanics`, `powerUps`, `upgrades`, `highlights`, `technologies`). Todos los textos son `localizedText(es, en)`.
- **Cambiar el enlace de itch.io**: campo `playUrl` del juego (y `storeUrl` de la colección; el enlace de la página BONK está en `resources` de `entries/bonk.ts`).
- **Añadir capturas o vídeo**: guarda los archivos en `public/images/projects/2025-26/personal/bonk/<juego>/` y añade en el juego `cover: '/images/projects/2025-26/personal/bonk/<juego>/portada.png'`, `featuredMedia: { type: 'video', src, poster, title }` y/o `gallery: [{ type: 'image', src, alt }]`. Sin esos campos no se muestra ninguna galería.
- **Ocultar o publicar un juego**: `publicable: false` / quítalo. Un juego oculto no tiene tarjeta ni página.
- **Añadir un octavo juego**: añade un objeto más al array `items` de `bonk.ts` (slug, título, textos, `playUrl`, `icon` de Material Symbols y `accent`). Se genera su página y su tarjeta sin tocar nada más.
- **Otra colección**: crea `src/data/collections/<nombre>.ts` con un `ProjectCollection` (`projectSlug` = slug de un proyecto existente) y regístrala en `COLLECTIONS` de `index.ts`.
