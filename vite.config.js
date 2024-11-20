import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import legacy from '@vitejs/plugin-legacy'
import ViteSitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
    ViteSitemap({
      hostname: 'https://mountainguide.nz',
      siteUrl: 'https://mountainguide.nz',
      changefreq: 'weekly',
      priority: {
        '/': 1.0,
        '/about': 0.8,
        '/locations': 0.8,
        '/climb': 0.8,
        '/ski': 0.7,
        '/overseas': 0.7,
        '/faq': 0.7,
        '/contact': 0.7,
        
      },
      
      lastmod: true,
    }),
  ],
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animations': ['framer-motion'],
          'map': ['leaflet', 'react-leaflet'],
          'carousel': ['react-slick', 'slick-carousel'],
          'styles': ['styled-components']
        },
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      },
    },
    cssCodeSplit: true,
    cssMinify: true,
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    }
  }
})
