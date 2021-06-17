module.exports = {
 purge: ['./src/**/*.jsx', './index.html'],
 darkMode: false, // or 'media' or 'class'
 theme: {
  extend: {
   backgroundImage: (theme) => ({
    'hero-pattern':
     "linear-gradient(to right, rgba(251,191,36, 0.8), rgba(255, 255, 255, 0), rgba(185, 28, 28, 1)), url('./img/chess.jpg')",
   }),
  },
 },
 variants: {
  extend: {
   backgroundColor: ['active'],
  },
 },
 plugins: [require('@tailwindcss/forms')],
};
