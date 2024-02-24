/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'grayish': '#FFFFF0'
      },
      backgroundImage: {
        'hero': "url('../public/images/bg-hero.png')",
      },
      
    },
  },
  plugins: [],
}