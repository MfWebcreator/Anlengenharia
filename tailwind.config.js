/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#081117',
        'dark-surface': '#0c1822',
        'dark-card': '#0e1c26',
        teal: {
          400: '#00e5a3',
          500: '#10b981',
          900: '#064e3b',
          950: '#042f2e',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
