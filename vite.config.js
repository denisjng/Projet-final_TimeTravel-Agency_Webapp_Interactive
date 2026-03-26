import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Configuration pour GitHub Pages
  // Remplace 'timetravel-agency-webapp' par le nom de ton repository GitHub
  base: process.env.GITHUB_PAGES ? '/timetravel-agency-webapp/' : '/',
})
