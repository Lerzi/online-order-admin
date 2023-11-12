// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss';
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
  presets: [
    presetAttributify({
      /* preset options */
    }),
    presetUno(),
    // presetWind(),
    // ...custom presets
    presetIcons(),
  ],
  theme: {
    // ...
    colors: {
      primary: {
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
        900: 'var(--color-primary-900)',
        DEFAULT: 'var(--color-primary-500)',
      },
      success: {
        100: 'var(--color-success-100)',
        200: 'var(--color-success-200)',
        300: 'var(--color-success-300)',
        400: 'var(--color-success-400)',
        500: 'var(--color-success-500)',
        600: 'var(--color-success-600)',
        700: 'var(--color-success-700)',
        800: 'var(--color-success-800)',
        900: 'var(--color-success-900)',
        DEFAULT: 'var(--color-success-500)',
      },
      info: {
        100: 'var(--color-info-100)',
        200: 'var(--color-info-200)',
        300: 'var(--color-info-300)',
        400: 'var(--color-info-400)',
        500: 'var(--color-info-500)',
        600: 'var(--color-info-600)',
        700: 'var(--color-info-700)',
        800: 'var(--color-info-800)',
        900: 'var(--color-info-900)',
        DEFAULT: 'var(--color-info-500)',
      },
      warning: {
        100: 'var(--color-warning-100)',
        200: 'var(--color-warning-200)',
        300: 'var(--color-warning-300)',
        400: 'var(--color-warning-400)',
        500: 'var(--color-warning-500)',
        600: 'var(--color-warning-600)',
        700: 'var(--color-warning-700)',
        800: 'var(--color-warning-800)',
        900: 'var(--color-warning-900)',
        DEFAULT: 'var(--color-warning-500)',
      },
      error: {
        100: 'var(--color-danger-100)',
        200: 'var(--color-danger-200)',
        300: 'var(--color-danger-300)',
        400: 'var(--color-danger-400)',
        500: 'var(--color-danger-500)',
        600: 'var(--color-danger-600)',
        700: 'var(--color-danger-700)',
        800: 'var(--color-danger-800)',
        900: 'var(--color-danger-900)',
        DEFAULT: 'var(--color-danger-500)',
      },
    },
  },
});
