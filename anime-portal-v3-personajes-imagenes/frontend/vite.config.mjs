import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.', // 👈 aquí está tu index.html (en frontend/)
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'), // asegura que Vite use el index.html correcto
    },
  },
  server: {
    port: 3000,
  },
})
