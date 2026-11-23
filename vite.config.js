import { defineConfig } from 'vite'
import { execSync } from 'node:child_process'

// Short commit hash of the build, shown in the footer so it's easy to tell
// which version a browser is displaying.
function commitHash() {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim()
  } catch {
    return 'dev'
  }
}

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/cavallino-3d/' : '/',
  define: {
    __APP_VERSION__: JSON.stringify(command === 'build' ? commitHash() : 'dev'),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
  server: {
    port: 5173,
    open: false,
    watch: {
      ignored: ['**/public/**', '**/.git/**']
    }
  }
}))
