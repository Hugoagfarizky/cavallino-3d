import { defineConfig } from 'vite'

export default defineConfig({
  base: '/cavallino-3d/',
  server: {
    port: 5173,
    open: false,
    watch: {
      ignored: ['**/public/**', '**/.git/**']
    }
  }
})
