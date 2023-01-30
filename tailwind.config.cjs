/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#DBDAEC",
        green: "#04A72A",
        orange: "#F27D0C",
        pink: "#FF5C93",
        brown: "#582D0A",
        white: "#ffffff",
        black: "#000000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
