import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src', // Cambia el directorio raíz a 'src'
  build: {
    outDir: '../dist', // Directorio de salida
    emptyOutDir: true, // Vaciar el directorio de salida antes de construir
    sourcemap: false
  },
  server: {
    port: 3002
  }
});