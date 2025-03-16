/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textgray: {
          50: '#f9fafb', // Define the value you want for bg-gray-50
        },
      },
    },
  },
  plugins: [],
};
