import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'public',   // 👈 ahora apunta a public
  build: {
    outDir: '../dist', // salida a la raíz del frontend
  },
  server: {
    port: 3000,
  },
})
