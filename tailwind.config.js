/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customtext: '#005477',
        custombg: '#005477',
      },
      margin: {
        'custom-left': '17px',
        'custom-right': '-15px',
        'custon-left1': '', // This seems to be missing a value
        'custom-right1': '-3px',
      },
      screens: {
        '3xl': { 'min': '1919px' },
        '2xl': { 'min': '1600px' },
        'xs': { 'max': '426px' },
        's': { 'max': '376px' },
        'a': { 'max': '321px' },
      },
    },
  },
  plugins: [],
}
