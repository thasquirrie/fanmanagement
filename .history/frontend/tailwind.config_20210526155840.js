module.exports = {
 purge: ['./src/**/*.jsx', './index.html'],
 darkMode: false, // or 'media' or 'class'
 theme: {
  extend: {
   backgroundImage: (theme) => ({
    'hero-pattern':
     "linear-gradient(to right, rgba('#fbbf24', 1), rgba(255, 255, 255, 0), rgba('#') ), url('./img/bigmachine1.png')",
   }),
  },
 },
 variants: {
  extend: {
   backgroundColor: ['active'],
  },
 },
 plugins: [],
};
