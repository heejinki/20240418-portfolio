/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        GRAY_LIGHT: "#f1f3f5",
        GRAY: "#adb5bd",
        GRAY_HEAVY: "#868e96",
        GRAY_EXTRAHEAVY: "#495057",
        BLACK: "#212529",
        PRIMARY_LIGHT: "#60a5fa",
        PRIMARY: "#60a5fa",
        PRIMARY_HEAVY: "#60a5fa",
      },
    },
  },
  plugins: [],
};
