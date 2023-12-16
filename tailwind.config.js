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
        DEFAULT: '#3A3A3A',
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
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
    },
    fontSize: {
      s: '12px',
      sm: '14px',
      base: '16px',
      l: '18px',
      xl: '26px',
    },
    extend: {
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
