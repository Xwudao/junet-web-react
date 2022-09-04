import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import injectExternals from 'vite-plugin-inject-externals';
import UnoCSS from 'unocss/vite';
import UnocssIcons from '@unocss/preset-icons';
import AutoImport from 'unplugin-auto-import/vite';
import checker from 'vite-plugin-checker';

import vitePluginForArco from '@arco-plugins/vite-react';
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
    //   external: ['react'],
    //   output: {
    //     globals: { react: 'React' },
    //     paths: {
    //       react: 'https://g.alicdn.com/code/lib/react/17.0.2/umd/react.production.min.js',
    //     },
    //   },
    // },
    // terserOptions: { compress: { drop_debugger: true, drop_console: true } },
  },
  esbuild: {
    drop: isProd ? ['console', 'debugger'] : [],
  },
  plugins: [
    UnoCSS(resolve('./uno.config.ts')),
    react(),
    checker({ typescript: true }),
    // injectExternals({
    //   modules: [
    //     {
    //       name: 'react',
    //       global: 'React',
    //       path: 'https://g.alicdn.com/code/lib/react/17.0.2/umd/react.production.min.js',
    //     },
    //     {
    //       name: 'react-dom',
    //       global: 'ReactDOM',
    //       path: 'https://g.alicdn.com/code/lib/react-dom/17.0.2/umd/react-dom.production.min.js',
    //     },
    //   ],
    // }),
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
