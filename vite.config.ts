import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://rubendguez.github.io/portfolio-react/",
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  }
})
