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
        'bp': '#dfc7c1',
        'lpink': '#f4dcd6',
        "lblue": '#b2d9ea',
        'mblue': '#84b4c8',
        'seablue': '#619196',
      },
      fontFamily: {
        body: ['Jost'],
        logo: ['Gloria Hallelujah']
      }
    },
  },
  plugins: [],
}
