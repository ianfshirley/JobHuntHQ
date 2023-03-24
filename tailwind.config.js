const { fontFamily } = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#f9f7f5',
        'beige': '#ab9282',
        'cornflower': '#84cce4',
        'mauve': '#7b636b',
        'light-mauve': '#877281',
        'twilight': '#3a5c79',
        'dusk': '#2C4254'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['var(--montserrat-font)', ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}
