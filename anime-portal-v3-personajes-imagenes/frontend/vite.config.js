import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración para Vite
export default defineConfig({
  plugins: [react()],
  root: '.', // indica que el index.html está en /frontend/public
  build: {
    outDir: 'dist', // salida del build
  },
  server: {
    port: 3000, // para desarrollo local
  },
})
