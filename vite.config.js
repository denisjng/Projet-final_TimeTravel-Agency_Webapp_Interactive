import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Configuration pour GitHub Pages
  // Le base path doit correspondre exactement au nom du repository GitHub.
  base: process.env.GITHUB_PAGES ? '/Projet-final_TimeTravel-Agency_Webapp_Interactive/' : '/',
})
