const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './public/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        blue: colors.lightBlue
     }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
