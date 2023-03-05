import { defineConfig, presetUno } from 'unocss';
import UnocssIcons from '@unocss/preset-icons';
import transformerCompileClass from '@unocss/transformer-compile-class';

export default defineConfig({
  rules: [],
  shortcuts: {
    'font-1': 'text-2xl font-bold',
  },
  theme: {},
  presets: [
    //@ts-ignore
    presetUno(),
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
