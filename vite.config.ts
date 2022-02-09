import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { peerDependencies, dependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    {'jsxRuntime': 'classic'}
  )],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`,
      // for UMD name: 'GlobalName'
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)]
    },
    target: 'esnext',
    sourcemap: true
  }
})
