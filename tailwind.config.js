/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#1d3557',
        'primary2':'#457b9d',
        'primary3':'#f1faee',
        'secondary':'#a8dadc',
        'accent':'#e63946'

      }
    },
  },
  plugins: [],
}

