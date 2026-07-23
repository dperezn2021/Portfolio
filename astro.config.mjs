import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://danielperez.dev',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});