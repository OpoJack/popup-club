/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  printWidth: 100,
};

module.exports = config;
