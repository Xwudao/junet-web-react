import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import UnoCSS from 'unocss/vite';
import UnocssIcons from '@unocss/preset-icons';
import AutoImport from 'unplugin-auto-import/vite';
const resolve = (p: string) => {
  return path.resolve(__dirname, p);
};
// https://vitejs.dev/config/
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
    react(),
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
    UnoCSS({
      // 但 `presets` 被指定时，默认的预设将会被禁用，
      // 因此你可以在你原有的 App 上使用纯 CSS 图标而不需要担心 CSS 冲突的问题。
      presets: [
        UnocssIcons({
          // 其他选项
          prefix: 'i-',
          extraProperties: {
            'vertical-align': 'middle',
            display: 'inline-block',
          },
        }),
        // presetUno() - 取消注释以启用默认的预设
      ],
    }),
  ],
  css: { modules: { localsConvention: 'camelCase' } },
});
