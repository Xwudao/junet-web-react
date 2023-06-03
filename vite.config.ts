import vitePluginForArco from '@arco-plugins/vite-react';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

const resolve = (p: string) => {
  return path.resolve(__dirname, p);
};
// https://vitejs.dev/config/
const isProd = process.env.NODE_ENV === 'production';
// @ts-ignore
export default defineConfig({
  resolve: {
    alias: { '@': resolve('src') },
    extensions: ['.tsx', '.js', '.ts'],
  },
  build: {
    minify: 'esbuild',
    // rollupOptions: {
    //   external: ['react', 'react-dom'],
    //   output: {
    //     globals: { react: 'React', 'react-dom': 'ReactDOM' },
    //     paths: {
    //       react: 'https://esm.sh/react@17',
    //       'react-dom': 'https://esm.sh/react-dom@17',
    //       // react: 'https://g.alicdn.com/code/lib/react/17.0.2/umd/react.production.min.js',
    //     },
    //   },
    // },
    // terserOptions: { compress: { drop_debugger: true, drop_console: true } },
  },
  esbuild: {
    drop: isProd ? ['console', 'debugger'] : [],
  },
  plugins: [
    UnoCSS(resolve('./unocss.config.ts')),
    react(),
    checker({ typescript: true }),
    vitePluginForArco({}),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  css: { modules: { localsConvention: 'camelCase' } },
});
