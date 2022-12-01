/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },

    extend: {
      screens: {
        'xs': '320px',
      },
    },
  },
  plugins: [],
}
