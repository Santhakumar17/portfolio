import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on all network interfaces
    host: '0.0.0.0',
    // Match the port exposed in your Docker container
    port: 5173,
    // Enable strict port to fail if port is in use
    strictPort: true,
    // Configure proxy for API requests if needed
    proxy: {
      '/api': {
        target: 'http://backend-service:port', // if you have a backend
        changeOrigin: true,
        secure: false,
      }
    }
  },
  // Optional: Base public path when served in production
  base: '/'
})