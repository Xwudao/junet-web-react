import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
const resolve = (p: string) => {
  return path.resolve(__dirname, p);
};
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: { '@': resolve('src') },
    extensions: ['.tsx', '.js', '.ts'],
  },
  plugins: [
    react(),
  ],
});
