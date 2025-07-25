import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    mainFields: ['module'],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      'sailpoint-components': resolve(__dirname, '../sailpoint-components/dist/fesm2022/sailpoint-components.mjs')
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
  publicDir: 'src/angular/assets',
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
    ],
    exclude: [
      'sailpoint-components'
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