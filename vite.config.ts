import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(), // Плагин для импорта SVG как React-компонентов
  ],

  base: './', // Это заставит Vite использовать относительные пути в билде (а не абсолютные)
});
