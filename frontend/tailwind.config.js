/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rocko: ["Rocko", "sans-serif"],
        Barlow:["Barlow Semi Condensed", "sans-serif"],
        caveat:["Caveat", "cursive"]
      },
      colors: {
        colorone: "#E9FF09",
        colortwo: "#404417",
      },
      screens: {
        "middleone": "520px", 
        "middletwo": "720px", 
      },
    },
  },
  plugins: [],
}

