module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        84: "21rem",
        "85p": "81.55555%",
        "84p": "84.444%",
      },
      inset: {
        22: "5.5rem",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      transitionDuration: ["hover", "focus"],
      cursor: ["hover", "focus"],
      transitionProperty: ["hover", "focus"],
    },
  },
  plugins: [],
};
