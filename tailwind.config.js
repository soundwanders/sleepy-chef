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
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
      },
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
        104:"1.04"
      }
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [],
};
