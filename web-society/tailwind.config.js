/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Play: ['Play', 'sans-serif'], // 'MyFont' 是你在 @font-face 中定义的字体名称
      },
    },
  },
  plugins: [],
}