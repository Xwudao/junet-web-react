import { defineConfig } from 'unocss';
import UnocssIcons from '@unocss/preset-icons';
import presetAttributify from '@unocss/preset-attributify';
import presetWind from '@unocss/preset-wind';
import transformerCompileClass from '@unocss/transformer-compile-class';

export default defineConfig({
  rules: [],
  shortcuts: {},
  theme: {
    colors: {
      primary: '#e67e22',
      black: '#17171a',
      whiteGray: 'rgba(255,255,255,0.9)',
    },
  },
  presets: [
    //@ts-ignore
    presetWind(),
    //@ts-ignore
    presetAttributify(),
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
