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
      },
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
        104:"1.04"
      },
      maxWidth: {
        "1/4": "25%",
        "1/3": "33%",
        "1/2": "50%",
        "2/3": "66%",
        "3/4": "75%",
      },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [],
};
