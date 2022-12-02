/** @type {import('tailwindcss').Config} */

const THEME_COLORS = {
  primary: "#FD9C32",
  secondary: '#0123FF',
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...THEME_COLORS,
      },
    },
  },
  plugins: [],
}
