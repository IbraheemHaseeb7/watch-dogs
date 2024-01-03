/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(185deg, rgba(255, 196, 46, 0.99) 9.47%, #AD27FF 38.95%, #511278 51.84%, #000000 82.54%)",
        "text-gradient":
          "linear-gradient(268.37deg, #C553ED 59.63%, #ED62B1 73.63%, #FFA234 109.03%)",
        "button-gradient":
          "linear-gradient(267.8deg, #08000C -11.95%, #C553ED 37.44%, #ED62B1 72%, #FFA234 114.99%)",
      },
      dropShadow: {
        "search-and-logo": "0px 3px 4px 0px #FFFBFB33",
      },
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
      },
    },
  },
  plugins: [],
};
