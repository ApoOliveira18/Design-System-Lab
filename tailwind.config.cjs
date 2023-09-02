/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      '2xl': 32,
    },
    colors: {

      transparent: 'transparent',

      black: '#000000',
      white: '#ffffff',

      gray: {
        900: '#121214',
        800: '#202024',
        700: '#D9D9D9',
        400: '#7C7C8A',
        100: '#E1E1E6',
      },

      cyan: {
        500: '#81d8f7',
        300: '#b3deed',
      }
    },
    extend: {
            fontFamily: {
       sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
