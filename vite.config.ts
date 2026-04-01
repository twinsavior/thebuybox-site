import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/thebuybox-site/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        survey: resolve(__dirname, 'survey.html'),
      },
    },
  },
})
