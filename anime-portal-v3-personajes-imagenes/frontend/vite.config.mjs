import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración para Vite
export default defineConfig({
  plugins: [react()],
  root: '.', // raíz donde está index.html
  build: {
    outDir: 'dist', // carpeta de salida
    emptyOutDir: true, // limpia la carpeta antes de cada build
  },
  server: {
    port: 3000, // puerto local de desarrollo
  },
})

