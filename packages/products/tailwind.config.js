module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        defaultBg: "#6b46c1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
