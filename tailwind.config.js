/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        murecho: ['Murecho', 'sans-serif'], // Add Murecho font
      },
    },
  },
  plugins: [],
}

