import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Mueve la caché fuera de node_modules para evitar bloqueos en Windows/OneDrive
  cacheDir: '.vite',
  plugins: [react(), tailwind()],
})
