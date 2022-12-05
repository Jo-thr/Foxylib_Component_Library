/** @type {import('tailwindcss').Config} */

const THEME_COLORS = {
  primary: '#0123FF',
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
      boxShadow: {
        blur: '0px 0px 15px 0px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
}
