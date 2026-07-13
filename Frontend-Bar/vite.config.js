import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        menu: 'pages/menu.html',
        contacto: 'pages/contacto.html',
      }
    }
  }
})