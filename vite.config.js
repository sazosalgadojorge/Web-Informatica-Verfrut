import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.verfrut.cl',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('react-router')) return 'router'
          if (id.includes('react-dom') || id.includes('/react/')) return 'react'
          if (id.includes('@mui') || id.includes('@emotion')) return 'mui'
          if (id.includes('swiper')) return 'swiper'
          if (id.includes('gsap') || id.includes('framer-motion') || id.includes('/motion/')) return 'motion'
          if (id.includes('bootstrap')) return 'bootstrap'
          if (id.includes('fuse.js')) return 'fuse'
          return 'vendor'
        }
      }
    }
  }
})
