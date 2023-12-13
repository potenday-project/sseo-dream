/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: {
        DEFAULT: '#FEF068',
        light: '#FEF068',
        dark: '#FEF068',
      },
      background: {
        DEFAULT: '#292929',
        light: '#FFFFFF',
        dark: '#292929',
      },
      contentBackground: {
        DEFAULT: '#3A3A3A',
        light: '#EBEBEB',
        dark: '#3A3A3A',
      },
      font: {
        DEFAULT: '#FFFFFF',
        light: '#494949',
        dark: '#FFFFFF',
      },
      disabled: {
        DEFAULT: '#878787',
        light: '#878787',
        dark: '#878787',
      },
      heading: {
        DEFAULT: '#FFFFFF',
        light: '#000000',
        dark: '#FFFFFF',
      },
      invert: {
        DEFAULT: '#292929',
        light: '#292929',
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
