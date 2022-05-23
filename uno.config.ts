import { defineConfig } from 'unocss';
import UnocssIcons from '@unocss/preset-icons';
import presetAttributify from '@unocss/preset-attributify';
import presetWind from '@unocss/preset-wind';

export default defineConfig({
  rules: [],
  shortcuts: {},
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
});
