import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/cavallino-3d/' : '/',
  server: {
    port: 5173,
    open: false,
    watch: {
      ignored: ['**/public/**', '**/.git/**']
    }
  }
}))
