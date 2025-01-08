/** @type {import('tailwindcss').Config} */
import gridAreas from "@savvywombat/tailwindcss-grid-areas";

export default {
  content: ["./index.html", "./src/*.js"],
  theme: {
    extend: {
      screens: {
        md: "1200px",
      },
      fontFamily: {
        barlowSemi: ["Barlow Semi Condensed", "sans-serif"],
      },
      gridTemplateAreas: {
        default: ["a a b c",
                  "d e e c"],
      },
      gridTemplateColumns: {
        reviews: "repeat(4, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        reviews: "repeat(2, minmax(0, 1fr))",
      },
    },
  },
  plugins: [gridAreas],
};
