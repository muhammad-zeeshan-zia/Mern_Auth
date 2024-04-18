import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [reactRefresh()],
   esbuild: {
    jsxInject: `import React from 'react'`,
  },
  server: {
host: true,
strictPort: true,
port: 8000,
},
})
