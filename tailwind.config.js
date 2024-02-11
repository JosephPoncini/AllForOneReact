/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'LaserGreen': "#14FF00",
        'MyGrey': '#475B46',
      },
      fontFamily: {
        'CutiveMono': ['Cutive Mono'],
      },
    },
  },
  plugins: [],
}

