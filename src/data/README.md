# data/

Esta carpeta concentra todo el contenido del portfolio. Es la fuente de verdad del sitio.

## Archivos principales

- `projects.ts` → listado completo de proyectos, imágenes, tecnologías, estado y datos de cada caso
- `translations.ts` → textos y traduccciones para español e inglés
- `navigation.ts` → rutas del menú principal
- `settings.ts` → información personal general del sitio
- `skills.ts` → habilidades o competencias
- `experience.ts` → experiencia profesional
- `education.ts` → formación
- `learning.ts` → aprendizaje continuo
- `socials.ts` → redes sociales y enlaces

## Regla de oro

Los componente visuales deben consumir datos desde aquí. Si un texto o valor cambia, no deberías tener que reescribir HTML completo.

## Cómo actualizar contenido

- Cambiar nombre, email o ubicación → `settings.ts`
- Añadir un proyecto → `projects.ts`
- Cambiar etiqueta de navegación → `navigation.ts`
- Añadir un texto visible → `translations.ts`
- Actualizar perfil profesional → `skills.ts`, `experience.ts`, `education.ts` o `learning.ts`