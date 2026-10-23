# Daniel Pérez Navarro

Diseño y desarrollo de videojuegos, experiencias interactivas y productos digitales. Me interesa combinar creatividad y pensamiento técnico para dar forma a proyectos y crear sistemas que resulten útiles para las personas.

## Sobre mí

Soy graduado en Diseño y Desarrollo de Videojuegos y actualmente curso el Máster en Animación 3D para las Industrias del Entretenimiento en UNIR. Trabajo como analista de soporte y mantenimiento de aplicaciones, donde investigo incidencias y contribuyo a que los servicios digitales funcionen de forma fiable.

Aprendo rápido, disfruto explorando herramientas nuevas y me gusta colaborar en proyectos que conectan diseño, tecnología y necesidades reales.

## Áreas de trabajo

- Desarrollo de videojuegos y sistemas interactivos
- Programación, herramientas y experiencias web
- Modelado, animación y producción 3D
- Diseño visual, concept art y UX/UI
- Soporte y mejora de aplicaciones digitales

## Proyectos

El portfolio reúne proyectos académicos, personales y profesionales, desde juegos multijugador y aplicaciones interactivas hasta arte 3D, animación y diseño visual.

Algunos proyectos destacados:

- [Menteando](https://dperezn2021.github.io/Portfolio/proyectos/menteando): aplicación web de ejercicios cognitivos gamificados
- [Histeria: Los Fragmentos de la Mente](https://dperezn2021.github.io/Portfolio/proyectos/histeria): videojuego narrativo sobre salud mental
- [Raki, el defensor de Fantasy Island](https://dperezn2021.github.io/Portfolio/proyectos/raki-animacion): animación 3D integrada en Unity

## Portfolio y contacto

- Portfolio: [dperezn2021.github.io/Portfolio](https://dperezn2021.github.io/Portfolio)
- LinkedIn: [Daniel Pérez Navarro](https://www.linkedin.com/in/dpereznavarro/)
- GitHub: [dperezn2021](https://github.com/dperezn2021)
- Email: [d.pereznavarro15@gmail.com](mailto:d.pereznavarro15@gmail.com)

## Desarrollo

Sitio estático con Astro 7 + Tailwind 4, desplegado en GitHub Pages bajo `/Portfolio`. Requiere Node 22.12 o superior.

```bash
npm install
npm run dev       # servidor local
npm run check     # astro check (tipos); también se ejecuta en el CI
npm run build     # genera dist/
npm run optimize-images  # tras añadir PNG/JPG nuevos a public/images/projects
```

El formulario de contacto usa EmailJS. Para que funcione en local, crea un `.env` con `PUBLIC_EMAILJS_PUBLIC_KEY`, `PUBLIC_EMAILJS_SERVICE_ID` y `PUBLIC_EMAILJS_TEMPLATE_ID`; en producción se leen de las variables del repositorio (`EMAILJS_*`).

Al añadir capturas nuevas, ponlas en `public/images/projects/...` como PNG/JPG, ejecuta `npm run optimize-images` (las convierte a WebP, guarda los originales en `Contenido_Porfolio/originales-imagenes/` y actualiza `src/data/image-sizes.json`) y referencia el archivo resultante (`.webp`; las portadas sin transparencia salen como `.jpg`).

Cómo añadir proyectos, medios y traducciones: [`docs/PORTFOLIO_GUIDE.md`](docs/PORTFOLIO_GUIDE.md) y [`docs/PROJECT_CHEATSHEET.md`](docs/PROJECT_CHEATSHEET.md).

