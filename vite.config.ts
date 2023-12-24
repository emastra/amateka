import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), mdx()],
});

// path aliases:
// https://dev.to/tilly/aliasing-in-vite-w-typescript-1lfo
