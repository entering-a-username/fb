/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.html", "./js/**/*.js", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        'facebook-font': ['SFProDisplay-Regular', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
