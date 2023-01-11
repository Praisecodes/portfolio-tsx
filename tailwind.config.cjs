/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#0B0C14',
        'orange': '#F95842',
        'alternate-bg': '#0F101C',
      },
      fontFamily:{
        'Lato': ["Lato"],
        'Nunito': ["Nunito"],
      },
      backgroundImage:{
        'about': 'url("./src/assets/images/praise.png")',
      },
    },
  },
  plugins: [],
}
