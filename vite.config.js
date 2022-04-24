import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({include: '**/*.{jsx, js}'}), WindiCSS()],
  define: {
    'process.env': {}
  }, 
  build: {
    sourcemap: true,
  },
})
