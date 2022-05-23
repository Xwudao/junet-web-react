import { defineConfig } from 'unocss';
import UnocssIcons from '@unocss/preset-icons';
import presetAttributify from '@unocss/preset-attributify';
import presetWind from '@unocss/preset-wind';

export default defineConfig({
  rules: [['custom-rule', { color: 'red' }]],
  shortcuts: {
    'custom-shortcut': 'text-lg text-orange hover:text-teal',
  },
  presets: [
    //@ts-ignore
    presetWind(),
    //@ts-ignore
    presetAttributify(),
    //@ts-ignore
    UnocssIcons({
      prefix: 'i-',
      extraProperties: {
        'vertical-align': 'middle',
        display: 'inline-block',
      },
    }),
  ],
});
