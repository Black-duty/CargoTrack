import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
  },
  optimizeDeps: {
    exclude: [],
    include: ['leaflet', 'react-leaflet', 'recharts', 'html5-qrcode'],
  },
  build: {
    minify: false,
  },
})