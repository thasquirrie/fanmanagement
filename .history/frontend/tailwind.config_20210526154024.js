module.exports = {
 purge: ['./src/**/*.jsx', './index.html'],
 darkMode: false, // or 'media' or 'class'
 theme: {
  extend: {
    backgroundImage:
  },
 },
 variants: {
  extend: {
   backgroundColor: ['active'],
  },
 },
 plugins: [],
};
