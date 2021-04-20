module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'gray-darkest': '#545554',
        'gray-dark': '#959494',
        'gray-regular': '#9B958D',
        'gray-light': '#CBC4B9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
