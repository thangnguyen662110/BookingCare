/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2md": "900px",
        "2lg": "1200px",
      },
      colors: {
        primary: {
          25: "#edfffa",
          50: "#DAF2F6",
          100: "#49bce2",
          200: "#45C3C2",
          300: "#34929E",
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
