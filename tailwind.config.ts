import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F6',
        surface: '#FFFFFF',
        'text-main': '#171717',
        'text-muted': '#6B6B6B',
        border: '#E7E2DE',
        brand: {
          DEFAULT: '#6E3B4A',
          dark: '#4F2733',
          soft: '#F2E6E8',
          light: '#8E4F61',
        },
        success: '#287A4B',
        danger: '#B42318',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      maxWidth: {
        content: '1320px',
      },
    },
  },
  plugins: [],
};
export default config;
