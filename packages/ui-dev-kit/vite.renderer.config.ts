import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    mainFields: ['module'],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      'sailpoint-components': '../sailpoint-components/src/public-api.ts'
    }
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: 'index.html'
    }
  },
  server: {
    port: 4200
  },
  root: '.',
  publicDir: 'src/assets',
  optimizeDeps: {
    include: [
      '@angular/core', 
      '@angular/common', 
      '@angular/platform-browser',
      '@angular/forms',
      '@angular/router',
      '@angular/material',
      '@angular/cdk',
      '@ngx-translate/core',
      '@ngx-translate/http-loader',
      'rxjs',
      'zone.js'
    ]
  },
  esbuild: {
    target: 'es2020'
  },
  define: {
    global: 'globalThis'
  },
  plugins: []
});