import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': 'var(--mainColor)',
        'color-disable': 'var(--colorDisable)',
      },
      backgroundImage: {
        'gradient-main-color-fade': 'linear-gradient(120deg,rgba(0, 133, 255, 1) 0%, rgba(0, 133, 255, 1) 40%, rgba(255, 255, 255, 1) 100%)'
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1280px',
        },
      },
     
    },
  },
  darkMode: 'class',
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#0085FF",
          },
        },
      },
    },
  })],
  // corePlugins: {
  //   preflight: false,
  // },
} satisfies Config;
