# Guía de mantenimiento del portfolio

Este documento reúne la lógica del proyecto para que cualquiera pueda entender cómo está construido, qué hace cada sección y dónde actualizar contenido sin romper la web.

## 1. Descripción general

Este portfolio es un sitio web estático generado con Astro + Tailwind. Está pensado para:

- mostrar información profesional de Daniel Pérez Navarro,
- presentar proyectos con filtros y vistas detalladas,
- permitir cambiar idioma entre español e inglés,
- servirse desde GitHub Pages con base path `/Portfolio`.

La aplicación principal está en `src/`, mientras que `public/` contiene assets copiados tal cual al build final.

## 2. Stack técnico

- Astro 7
- Tailwind CSS 4
- TypeScript
- JavaScript vanilla para scripts globales
- GitHub Pages como despliegue

## 3. Puntos clave del proyecto

### Layout base
El archivo principal del sitio es:

- `src/layouts/MainLayout.astro`

Aquí se define:

- carga de CSS global,
- carga de tipografías,
- inicialización del tema oscuro/claro,
- scripts globales,
- etiqueta HTML base,
- slot para el contenido de cada página.

### Navegación
La navegación principal se define en:

- `src/data/navigation.ts`

Cada item define:

- la ruta,
- el título,
- la clave de internacionalización.

### Traducciones
Las traducciones se centralizan en:

- `src/data/translations.ts`

Este archivo contiene los textos de la web en español e inglés. Es el punto más importante si quieres cambiar textos de botón, títulos, textos de proyecto o textos de cabeceras.

### Datos del portfolio
La información del sitio vive en:

- `src/data/settings.ts`
- `src/data/projects/` (índice `index.ts` + proyectos individuales en `entries/`)
- `src/data/academic-catalog.ts` (inventario de asignaturas del grado y qué proyecto tiene cada una — ver `docs/ACADEMIC_PROJECTS.md`)
- `src/data/education.ts`
- `src/data/experience.ts`
- `src/data/learning.ts`
- `src/data/skills.ts`
- `src/data/socials.ts`

Esto separa contenido visual de contenido de negocio. Si cambias un proyecto, una formación, una experiencia o un enlace social, normalmente no tendrás que tocar componentes HTML.

## 4. Cómo se renderiza el sitio

### Páginas
Las páginas se encuentran en:

- `src/pages/index.astro`
- `src/pages/sobre-mi.astro`
- `src/pages/trayectoria.astro`
- `src/pages/proyectos.astro`
- `src/pages/contacto.astro`
- `src/pages/proyectos/[slug].astro`

Cada archivo en `src/pages` representa una ruta pública del sitio. Los componentes visuales se importan desde `src/components` y se montan ahí.

### Componentes
La UI se organiza por áreas:

- `src/components/home/` → Hero, CTA, stats, servicios
- `src/components/about/` → Perfil, habilidades, experiencia, CV digital
- `src/components/projects/` → tarjetas, filtros, galería, proyectos
- `src/components/layout/` → header, footer
- `src/components/common/` → botones, badges, títulos compartidos
- `src/components/contact/` → formulario y contacto

La idea es que cada página sea una composición de bloques reutilizables.

## 5. Cambios habituales que necesitarás hacer

### Cambiar datos personales
Edita:

- `src/data/settings.ts`

Allí se define:

- nombre,
- email,
- ubicación,
- descripción del sitio.

### Cambiar textos generales
Edita:

- `src/data/translations.ts`

Aquí se controlan los textos visibles del sitio y la internacionalización.

### Añadir o editar proyectos
Edita (o crea) su archivo en:

- `src/data/projects/entries/<slug>.ts`, y regístralo en `src/data/projects/index.ts`

Mínimo imprescindible: `slug`, `year`, `type`, `title`, `description`, `tags`, `featured`, `disciplines`. Todo lo demás es opcional:

- `coverImage` / `cover` — portada (opcional; un proyecto oculto puede no tener aún)
- `featuredMedia` — contenido principal opcional: imagen, vídeo (local o YouTube/Vimeo), PDF, Figma o demo/juego embebido. Si no se indica, la portada hace de contenido principal
- `galleryImages` o `gallery` — galería de imágenes **y vídeos** mezclados (nunca PDFs ni enlaces sueltos)
- `resources` — recursos y enlaces opcionales (GitHub, itch.io, PDF, documentación, demo, Figma, web...); los proyectos antiguos siguen funcionando con `links`/`externalLinks`
- `publicable` — `false` oculta el proyecto por completo (sin página, sin listados, sin filtros)
- `academicYear`, `context`, `subjects` — metadatos académicos; si el proyecto pertenece a una asignatura, regístralo también en `src/data/academic-catalog.ts` (ver `docs/ACADEMIC_PROJECTS.md`)
- `status`

Si añades un proyecto nuevo, también conviene revisar:

- las veces que se usa el filtro por disciplina,
- si quieres que aparezca en la home (`featured: true`),
- si debes crear imágenes en `public/images/projects/{curso}/{asignatura-principal}/{slug}/`.

### Añadir una nueva sección en una página
Hazlo de esta forma:

1. crea el componente nuevo en `src/components/...`
2. impórtalo en la página de destino,
3. insértalo dentro del layout principal o la página.

### Cambiar la estructura del menú
Edita:

- `src/data/navigation.ts`

### Cambiar el tema visual
Edita:

- `src/styles/globals.css`
- `tailwind.config.mjs`

## 6. Cómo funciona el sistema de idioma

La detección y cambio de idioma se gestionan con:

- `public/scripts/language.js`
- `src/data/translations.ts`
- `src/utils/url.ts`

El proyecto usa `data-i18n` para cambiar textos dinámicamente con JavaScript, sin necesidad de recargar toda la página.

## 7. Scripts del cliente
Los scripts globales están en:

- `public/scripts/theme.js`
- `public/scripts/language.js`
- `public/scripts/animations.js`
- `public/scripts/filters.js`
- `public/scripts/contact.js`
- `public/scripts/main.js`

Estos scripts se cargan desde `src/layouts/MainLayout.astro` y controlan:

- tema claro/oscuro,
- idioma,
- filtros de proyectos,
- animaciones,
- formulario de contacto.

## 8. Archivos importantes por carpeta

### `src/pages`
Contiene las rutas del sitio.

Importante:

- `src/pages/index.astro` = home
- `src/pages/proyectos.astro` = listado de proyectos
- `src/pages/proyectos/[slug].astro` = detalle de un proyecto
- `src/pages/sobre-mi.astro` = perfil profesional
- `src/pages/contacto.astro` = contacto

### `src/components`
Contiene bloques de la interfaz reutilizables.

### `src/data`
Contiene contenido y datos que no son visuales.

### `src/layouts`
Define estructura global del sitio.

### `src/styles`
Define estilos base y reutilizables del proyecto.

### `public`
Contiene archivos con acceso directo desde la web, como:

- imágenes,
- scripts,
- favicon,
- recursos públicos.

## 9. Configuración local

Los comandos de desarrollo y la configuración del servicio de correo se mantienen en la nota local `.local/LOCAL_SETUP.txt`, excluida del repositorio público por `.gitignore`.

## 10. Despliegue

La configuración actual usa GitHub Pages con base path:

- `astro.config.mjs`

Si se despliega en GitHub Pages, el sitio se sirve bajo `/Portfolio`.

## 11. Recomendación para futuras actualizaciones

Para mantener el portfolio fácil de actualizar:

- cambia contenido en `src/data` antes que en JSX,
- no dupliques texto en múltiples sitios,
- usa `translations.ts` para idiomas,
- guarda imágenes en `public/images` y referencia por ruta relativa,
- usa componentes reutilizables y evita duplicar bloques.

## 12. Resumen rápido para un agente o IA

Si tienes que modificar el portfolio, normalmente estas son las ubicaciones correctas:

- texto de portada: `src/components/home/Hero.astro`
- perfil profesional: `src/components/about/Profile.astro`
- navegación: `src/data/navigation.ts`
- información del sitio: `src/data/settings.ts`
- textos globales: `src/data/translations.ts`
- proyectos: `src/data/projects/`
- estilos: `src/styles/globals.css`
- páginas: `src/pages/*.astro`

Con esto, cualquier persona o IA puede entender la estructura y mantener el proyecto de forma segura.
