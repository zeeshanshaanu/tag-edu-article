/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        gray: "#585858",
        lightgray: "#949494",
        primarygreen: "#CAFD5D",
        green: "#60A100",
      },
      fontFamily: {
        satoshi: ['"Satoshi Variable"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
