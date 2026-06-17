import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so assets resolve both at the project path
  // (<user>.github.io/afwrites/) and at the custom root domain (afwrites.com).
  base: './',
  plugins: [react()],
})
