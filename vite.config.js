import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000/',  // Your backend
  //       changeOrigin: true,
  //       // rewrite: (path) => path.replace(/^\/api/, ''), // remove "/api" prefix
  //     },
  //   },
  // },
})
