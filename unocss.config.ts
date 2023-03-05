import { defineConfig, presetUno } from 'unocss';
import UnocssIcons from '@unocss/preset-icons';
import transformerCompileClass from '@unocss/transformer-compile-class';
import presetAutoprefixer from 'unocss-preset-autoprefixer';

export default defineConfig({
  rules: [],
  shortcuts: {
    'font-1': 'text-2xl font-bold',
  },
  theme: {},
  presets: [
    //@ts-ignore
    presetUno(),
    presetAutoprefixer(),
    //@ts-ignore
    UnocssIcons({
      scale: 1,
      prefix: 'i-',
      extraProperties: {
        'vertical-align': 'middle',
        display: 'inline-block',
      },
    }),
  ],
  transformers: [
    //@ts-ignore
    transformerCompileClass({
      trigger: 'kk',
    }),
  ],
});
