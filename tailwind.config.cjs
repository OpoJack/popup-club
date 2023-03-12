/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blurple: {
          DEFAULT: "#5865F2",
          50: "#FFFFFF",
          100: "#EFF1FE",
          200: "#CACEFB",
          300: "#A4ABF8",
          400: "#7E88F5",
          500: "#5865F2",
          600: "#2435EE",
          700: "#101FCA",
          800: "#0C1796",
          900: "#080F62",
        },
        twitter: {
          DEFAULT: "#1DA1F2",
          50: "#CBE9FC",
          100: "#B7E1FB",
          200: "#91D1F9",
          300: "#6AC1F6",
          400: "#44B1F4",
          500: "#1DA1F2",
          600: "#0C82CB",
          700: "#096096",
          800: "#063E61",
          900: "#031C2C",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
