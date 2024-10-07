/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'stmo': { 'min': '320px' },
        'tml': { 'max': '810px' },
        'btl': { 'min': '810px', 'max': '1199px' },
        'af990': { 'min': '992px' },
        'amLL': { 'min': '1200px' },
        'bmLLL': { 'min': '1200px', 'max': '1439px' },
        'bmL4k': { 'min': '1440px', 'max': '1919px' },
      }
    },
  },
  plugins: [],
};
