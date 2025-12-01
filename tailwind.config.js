// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // jahan tera code hai
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // yahan custom font ka naam
      },
    },
  },
  plugins: [],
}
