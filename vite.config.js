import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  server: {
    proxy: {
      '/api': {
        target: 'https://password-manager-seven-sigma.vercel.app',  // Your backend
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''), // remove "/api" prefix
      },
    },
  },
})
