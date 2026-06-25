import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Componentes de @unifrutti/ui que importamos (incluyendo los usados en rutas lazy
// como Turnos, Videos, Anexos). Declarados explícitamente para que Vite los
// pre-bundlee al arrancar y no fallen con MIME vacío al navegar.
const UNIFRUTTI_COMPONENTS = [
  '@unifrutti/ui/components/alert',
  '@unifrutti/ui/components/badge',
  '@unifrutti/ui/components/button',
  '@unifrutti/ui/components/card',
  '@unifrutti/ui/components/divider',
  '@unifrutti/ui/components/drawer',
  '@unifrutti/ui/components/input',
  '@unifrutti/ui/components/modal',
  '@unifrutti/ui/components/pagination',
  '@unifrutti/ui/components/select',
  '@unifrutti/ui/components/table',
  '@unifrutti/ui/components/tag',
]

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: UNIFRUTTI_COMPONENTS,
  },
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
