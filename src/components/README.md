# components/

Esta carpeta contiene los componentes de la interfaz que se reutilizan en varias secciones del sitio.

## Subcarpetas

- `about/` → contenido relacionado con el perfil, habilidades y CV
- `common/` → piezas reutilizables como botones, badges o títulos
- `contact/` → formulario y datos de contacto
- `home/` → hero, servicios, projetos destacados y CTA
- `layout/` → header, footer y estructura global
- `projects/` → fichas, filtros, galería y listado de proyectos

## Propósito

Los componentes sirven para separar la lógica visual de la información. En lugar de repetir bloques de HTML en varias páginas, se crean componentes reutilizables que reciben props o toman datos desde `src/data`.

## Normas

- Mantén cada componente enfocado en una sola responsabilidad.
- Usa props cuando un componente necesite datos cambiantes.
- Si un texto es generico o visible en la web, intenta tenerlo en `src/data/translations.ts`.
- Un componente muy grande puede extraerse a otro más pequeño.