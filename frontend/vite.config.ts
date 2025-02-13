import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
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
    port: 3002
  }
});