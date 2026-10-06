# scripts/

Aquí reside la lógica del cliente que da interactividad a la web.

## Archivos principales

- `theme.js` → cambia entre modo oscuro y claro
- `language.js` → gestiona internacionalización y cambio de idioma
- `animations.js` → añade scroll y animaciones visuales
- `filters.js` → filtra y busca proyectos
- `contact.js` → comportamiento del formulario de contacto
- `main.js` → inicializa todos los scripts globals

## Cómo se usan

Los scripts se cargan desde `src/layouts/MainLayout.astro` y se ejecutan al cargar la página. La lógica está separada para facilitar mantenimiento y depuración.

## Importante

Si quieres modificar comportamiento del sitio no siempre tendrás que tocar Astro: a veces la lógica real está aquí.