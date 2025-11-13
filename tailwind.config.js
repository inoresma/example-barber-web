/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'barber-black': '#000000',
        'barber-dark': '#1a1a1a',
        'barber-gray': '#2d2d2d',
        'barber-light-gray': '#4a4a4a',
        'barber-gold': '#d4af37',
        'barber-light-gold': '#f4d03f',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

