const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#66cc8a',
          focus: '#41be6d',
          content: '#f9fafb',
        },
        secondary: {
          DEFAULT: '#377cfb',
          focus: '#055bfa',
          content: '#f9fafb',
        },
        accent: {
          DEFAULT: '#ea5234',
          focus: '#d03516',
          content: '#f9fafb',
        },
        neutral: {
          DEFAULT: '#333c4d',
          focus: '#1f242e',
          content: '#f9fafb',
        },
        'base-100': '#ffffff',
        'base-200': '#f9fafb',
        'base-300': '#f0f0f0',
        'base-content': '#333c4d',

        info: '#1c92f2',
        success: '#009485',
        warning: '#ff9900',
        error: '#ff5724',

        blurple: {
          DEFAULT: '#5865F2',
          50: '#FFFFFF',
          100: '#EFF1FE',
          200: '#CACEFB',
          300: '#A4ABF8',
          400: '#7E88F5',
          500: '#5865F2',
          600: '#2435EE',
          700: '#101FCA',
          800: '#0C1796',
          900: '#080F62',
        },
        twitter: {
          DEFAULT: '#1DA1F2',
          50: '#CBE9FC',
          100: '#B7E1FB',
          200: '#91D1F9',
          300: '#6AC1F6',
          400: '#44B1F4',
          500: '#1DA1F2',
          600: '#0C82CB',
          700: '#096096',
          800: '#063E61',
          900: '#031C2C',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

module.exports = config;
