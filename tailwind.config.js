/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      content: {
        homeBg: "url('./assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
