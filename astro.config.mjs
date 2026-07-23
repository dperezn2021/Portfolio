import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://dperezn2021.github.io',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});

