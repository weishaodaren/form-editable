import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';
import { vite as million } from 'million/compiler';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million({ auto: true }), react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './'),
    },
  },
});
