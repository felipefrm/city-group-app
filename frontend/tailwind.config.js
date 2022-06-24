/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        brand: {
          'green': "#65be6c",
          'orange': "#f99f23",
          'yellow': "#f8ef24",
          'red': "#ef3e3f",
          'blue': "#23c1ed",
        }
      }
    },
  },
  plugins: [],
}
