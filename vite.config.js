import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base URL - use '/' for Vercel, '/lumi-slides/' for GitHub Pages
  base: process.env.GITHUB_PAGES ? '/lumi-slides/' : '/',
})

