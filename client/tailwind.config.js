/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#DAF2F6",
          100: "#45C3C2",
          200: "#34929E",
        },
        secondary: {
          50: "#FFFED1",
          100: "##FFF8D1",
          200: "#FFF3D1",
          300: "#FFEDD1",
          400: "#FFE6D1",
          500: "#FFC419",
          600: "#FFE119",
          700: "##FFFD19",
        },
      },
    },
  },
  plugins: [],
};
