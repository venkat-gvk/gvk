module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        84: "21rem",
        "85p": "82.55555%",
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
    },
  },
  plugins: [],
};
