const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        1000: "1000ms",
        1500: "1000ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
        4000: "4000ms",
      },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [],
};
