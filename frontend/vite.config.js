import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    replace({
      'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL || ''),
    }),
  ],
  build: {
    outDir: 'build',
  },
})
