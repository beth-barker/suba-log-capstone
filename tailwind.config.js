/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#fdfcdc',
        'coral': '#f07167',
        'lighto': '#fed9b7',
        'dark': '#0081a7',
        'light': '#00afb9',
      },
    },
  },
  plugins: [],
}
