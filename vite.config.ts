import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served from https://<user>.github.io/afwrites/ on GitHub Pages
  base: '/afwrites/',
  plugins: [react()],
})
