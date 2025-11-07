import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: repo is "CV"
export default defineConfig({
  plugins: [react()],
  base: '/CV/'
})
