import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// path aliases:
// https://dev.to/tilly/aliasing-in-vite-w-typescript-1lfo