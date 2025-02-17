import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  // Cargar variables de entorno desde el directorio raíz del proyecto
  const env = loadEnv(mode, process.cwd(), '');

  console.log('Mode:', mode);
  console.log('API URL:', env.VITE_API_URL);

  return {
    plugins: [react()],
    root: 'src',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@public': path.resolve(__dirname, 'src/public')
      }
    },
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      sourcemap: false
    },
    server: {
      port: 3002,
    },
    define: {
      // Exponer las variables de entorno al cliente
      'process.env': {
        VITE_API_URL: env.VITE_API_URL
      }
    }
  }
});