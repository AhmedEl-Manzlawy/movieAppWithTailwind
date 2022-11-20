/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'manzo-yellow':'#ECD06F',
        'm-red':'#D14836',
        'm-lightblue':'#49c5b6'
      },
      fontFamily:{
        'oregano' :['Oregano', 'cursive'],
        'aug':['Aguafina Script', 'cursive'],
        'iti':[ 'Courgette', 'cursive']
      },
      screens:{
        'xs':'320px'
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
