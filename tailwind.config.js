/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#222831',
        'custom-gray': '#393E46',
        'custom-teal': '#00ADB5',
        'custom-light': '#EEEEEE',
      },
    },
  },
  plugins: [],
}