/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: {
        DEFAULT: '#FEF068',
        dark: '#FEF068',
      },
      background: {
        DEFAULT: '#FFFFFF',
        dark: '#3A3A3A',
      },
      contentBackground: {
        DEFAULT: '#EBEBEB',
        dark: '#3A3A3A',
      },
      font: {
        DEFAULT: '#494949',
        dark: '#FFFFFF',
      },
      heading: {
        DEFAULT: '#000000',
        dark: '#FFFFFF',
      },
      invert: {
        DEFAULT: '#292929',
        dark: '#292929',
      },
    },
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      l: '18px',
      xl: '26px',
    },
  },
  plugins: [],
};
