/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: () => ({
        homeBg: "url('./images/bg.jpg')",
      }),
    },
  },
  plugins: [],
};
