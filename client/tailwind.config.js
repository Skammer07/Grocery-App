/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4b0082', // 💜 Now bg-primary, text-primary will work!
      },
    },
  },
  plugins: [],
};
