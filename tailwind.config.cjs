const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      boxShadow: {
        outline: 'inset 0 0 0 1px hsl(0deg 0% 100% / 10%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        netflix: ['var(--font-netflix)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'netflix-red': '#E50914',
      },
      aspectRatio: {
        poster: '1 / 1.5',
      },
      gridAutoColumns: {
        posters: '150px',
      },
      gridTemplateColumns: {
        posters: 'repeat(auto-fill, 150px)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
