/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'osto-blue': '#0b63ff',
        'osto-ink': '#0a1226',
        'osto-teal': '#00bfa6'
      }
    },
  },
  plugins: [],
}
