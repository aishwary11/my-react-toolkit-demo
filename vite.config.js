import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild",
    outDir: "./build"
  },
  server: {
    port: 3000
  }
});
