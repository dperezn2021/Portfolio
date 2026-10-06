# src/

Esta es la carpeta principal del proyecto. Aquí vive el código que genera la experiencia completa del portfolio.

## Organización

- `components/` → bloques visuales reutilizables
- `data/` → contenido estructurado del portfolio
- `layouts/` → layouts base para todas las páginas
- `pages/` → rutas públicas del sitio
- `styles/` → CSS global y estilos reutilizables
- `utils/` → funciones auxiliares de rutas y lenguaje

## Cómo entender el proyecto

El proyecto sigue una lógica simple:

- `pages/` crea las URLs del sitio
- `components/` construye los bloques visuales
- `data/` contiene los textos y datos
- `layouts/` envuelve la página con el shell base
- `styles/` controla la apariencia global

## Regla de mantenimiento

Cuando quieras actualizar algo, intenta hacerlo desde el origen del dato:

- texto visible → `src/data/translations.ts`
- perfil y datos personales → `src/data/settings.ts`
- proyectos → `src/data/projects.ts`
- menú → `src/data/navigation.ts`

## Recomendación importante

No dupliques contenido en varios archivos. Si algo se repite, probablemente debe ir a `data/` o a un componente reutilizable.