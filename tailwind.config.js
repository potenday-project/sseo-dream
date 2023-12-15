/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        success: {
          wrapper: '#EDFBD8',
          color: '#2B641E',
        },
        warning: {
          wrapper: '#FEF7D1',
          color: '#755118',
        },
        error: {
          wrapper: '#FCE8DB',
          color: '#71192F',
        },
      },
      keyframes: {
        'fade-in-out': {
          '0%': { opacity: 0 },
          '25%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        fadeInOut: 'fade-in-out 3s ease-out forwards',
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text)-(success|warning|error)-(wrapper|color)/,
      variants: ['hover', 'focus', 'active'],
    },
  ],
  plugins: [],
};
