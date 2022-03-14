const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      //custom colors start here
      blue: colors.blue,
      primarypurple: "#8826D1",
      primarypink: "#BD0F71",
      lightpurple: "#9F09FC",
      lightpink: "#E30057",
      primaryorange: "#F8550E",
      primarygreen: "#2FF80E",
      primarycharcoalblack: "#232427",
      primaryblack: "#1B1C20",
      primarygrey: "#79797A",
    },
    extend: {},
  },
  plugins: [],
};
