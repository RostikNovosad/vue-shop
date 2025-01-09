/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      minHeight: {
        'screen-minus-112': 'calc(100vh - 112px)',
        'screen-minus-80': 'calc(100vh - 80px)',
        'screen-minus-48': 'calc(100vh - 48px)',
        'screen-minus-16': 'calc(100vh - 16px)',
      },
    },
  },
  plugins: [],
};
