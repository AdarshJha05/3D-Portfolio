import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['heroImage.jpg', 'robots.txt'],
      manifest: {
        name: 'Adarsh Jha Portfolio',
        short_name: 'Portfolio',
        description: 'Adarsh Jha 3D Portfolio Website',
        theme_color: '#854CE6',
        icons: [
          {
            src: 'heroImage.jpg',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: 'heroImage.jpg',
            sizes: '512x512',
            type: 'image/jpeg'
          }
        ]
      }
    })
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1600,
  },
});
