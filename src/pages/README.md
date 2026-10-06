# pages/

Cada archivo dentro de esta carpeta representa una ruta del sitio web.

## Páginas principales

- `index.astro` → home
- `sobre-mi.astro` → sección sobre mí
- `trayectoria.astro` → trayectoria profesional
- `proyectos.astro` → listado principal de proyectos
- `contacto.astro` → formulario y datos de contacto
- `proyectos/[slug].astro` → detalle de un proyecto específico

## Convención

Las páginas deben actuar como orquestadores: importar layouts y componentes, pasar props y dejar que cada bloque renderice su contenido.

## Recomendación

Si una página crece demasiado, extrae partes a archivos dentro de `src/components/` para mantenerla limpia y escalable.