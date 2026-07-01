import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

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
  base: './',
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80, compressionLevel: 9 },
      jpeg: { quality: 75, mozjpeg: true },
      jpg: { quality: 75, mozjpeg: true },
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: { overrides: { removeViewBox: false } },
          },
        ],
      },
    }),
  ],
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
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    css: false,
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('react-router')) return 'router'
          if (/node_modules\/react(-dom)?\//.test(id)) return 'react'
          if (id.includes('swiper')) return 'swiper'
          if (id.includes('framer-motion')) return 'motion'
          if (id.includes('bootstrap')) return 'bootstrap'
          if (id.includes('fuse.js')) return 'fuse'
          return 'vendor'
        }
      }
    }
  }
})
