import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
 plugins: [react()],
 server: {
  host: '0.0.0.0',
  port: 5173,
  allowedHosts: [
   'web.morningmates.in',
   'morningmates.in',
   'localhost',
  ],
 },
 build: {
  rollupOptions: {
   external: [],
  },
    // This is the CRITICAL block you added:
    commonjsOptions: {
        include: [/node_modules/],
    },
 },
 optimizeDeps: {
  include: ['@emailjs/browser'],
 },
})

