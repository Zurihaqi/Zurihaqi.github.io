/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  mode: "jit",
  theme: {
    extend: {},
    fontFamily: {
      playfair: ["playfair", "playfair"],
      quicksand: ["quicksand", "quicksand"],
    },
  },
  plugins: [],
  darkMode: "class",
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
