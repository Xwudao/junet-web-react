import { defineConfig } from 'unocss';
import UnocssIcons from '@unocss/preset-icons';
import presetAttributify from '@unocss/preset-attributify';
import presetWind, { Theme } from '@unocss/preset-wind';
import transformerCompileClass from '@unocss/transformer-compile-class';
import themePreset from 'uno-preset-dark-theme';

export default defineConfig({
  rules: [],
  shortcuts: {},
  theme: {
    colors: {},
  },
  presets: [
    //@ts-ignore
    themePreset({
      enforce: 'post',
      pureCssVariables: {
        primary: {
          DEFAULT: 'rgb(var(--arcoblue-6))',
          hover: 'rgb(var(--arcoblue-5))',
          click: 'rgb(var(--arcoblue-7))',
          special: 'rgb(var(--arcoblue-4))',
          disabled: 'rgb(var(--arcoblue-2))',
        },
        success: {
          DEFAULT: 'rgb(var(--green-6))',
          hover: 'rgb(var(--green-5))',
          click: 'rgb(var(--green-7))',
          special: 'rgb(var(--green-4))',
          disabled: 'rgb(var(--green-3))',
          textDisable: 'rgb(var(--green-2))',
        },
        warning: {
          DEFAULT: 'rgb(var(--orange-6))',
          hover: 'rgb(var(--orange-5))',
          click: 'rgb(var(--orange-7))',
          special: 'rgb(var(--orange-4))',
          disabled: 'rgb(var(--orange-2))',
        },
        danger: {
          DEFAULT: 'rgb(var(--red-6))',
          hover: 'rgb(var(--red-5))',
          click: 'rgb(var(--red-7))',
          special: 'rgb(var(--red-4))',
          disabled: 'rgb(var(--red-2))',
        },
        link: {
          DEFAULT: 'rgb(var(--arcoblue-6))',
          hover: 'rgb(var(--arcoblue-5))',
          click: 'rgb(var(--arcoblue-7))',
          special: 'rgb(var(--arcoblue-4))',
          disabled: 'rgb(var(--arcoblue-2))',
        },
        bd: {
          light: 'var(--color-neutral-2)',
          common: 'var(--color-neutral-3)',
          deep: 'var(--color-neutral-4)',
          heavy: 'var(--color-neutral-6)',
        },
        txt: {
          emphasize: 'var(--color-text-1)',
          secondary: 'var(--color-text-2)',
          info: 'var(--color-text-3)',
          gray: 'var(--color-text-4)',
        },
        bg: {
          main: 'var(--color-bg-1)',
          primary: 'var(--color-bg-2)',
          secondary: 'var(--color-bg-3)',
          third: 'var(--color-bg-4)',
          material: 'var(--color-bg-5)',
          white: 'var(--color-bg-white)',
        },
      },
    }),
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
