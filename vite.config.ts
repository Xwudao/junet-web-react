import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import UnoCSS from 'unocss/vite';
import UnocssIcons from '@unocss/preset-icons';
import AutoImport from 'unplugin-auto-import/vite';
import checker from 'vite-plugin-checker';

import vitePluginForArco from '@arco-plugins/vite-react';
const resolve = (p: string) => {
  return path.resolve(__dirname, p);
};
// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
  resolve: {
    alias: { '@': resolve('src') },
    extensions: ['.tsx', '.js', '.ts'],
  },
  build: {
    minify: 'terser',
    terserOptions: { compress: { drop_debugger: true, drop_console: true } },
  },
  plugins: [
    UnoCSS(resolve('./uno.config.ts')),
    react(),
    checker({ typescript: true }),
    vitePluginForArco({}),
    AutoImport({
      imports: ['react', 'react-router-dom'],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: './auto-imports.d.ts',
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  css: { modules: { localsConvention: 'camelCase' } },
});
