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
        'csscolor': '#2965F1',
        'jscolor': '#f0db4f',
        'phpcolor': '#8993be',
        'sqlcolor': '#00758F',
        'typescriptcolor': '#007acc',
      },
      fontFamily:{
        'Lato': ["Lato"],
        'Nunito': ["Nunito"],
      },
      backgroundImage:{
        'about': 'url("./src/assets/images/praise.png")',
        'other': 'url("./src/assets/images/praisecodes.png")',
      },
    },
  },
  plugins: [],
}
