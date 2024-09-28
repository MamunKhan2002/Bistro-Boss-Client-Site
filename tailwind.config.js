/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Cinzel: ["Cinzel", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Inter: ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}