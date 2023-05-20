/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        letras: {
          100: '#f7f7fd',
          200: '#efeffb',
          300: '#e8e8fa',
          400: '#e0e0f8',
          500: '#d8d8f6',
          600: '#adadc5',
          700: '#828294',
          800: '#565662',
          900: '#2b2b31',
        },
        fondos: {
          100: '#d5d5d6',
          200: '#ababae',
          300: '#808085',
          400: '#56565d',
          500: '#2c2c34',
          600: '#23232a',
          700: '#1a1a1f',
          800: '#121215',
          900: '#09090a',
        },
        colors: {
          'black-rgba': 'rgba(0, 0, 0, 0.54)',
        },
      },
    },
  },
  plugins: [],
};
