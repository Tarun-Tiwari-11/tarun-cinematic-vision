/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        offWhite: '#e2e2e2',
        accentRed: '#cc0000',
      },
      fontFamily: {
        brittany: ['Brittany', 'system-ui', 'sans-serif'],
        phatt: ['Phatt', 'system-ui', 'sans-serif'],
        horizon: ['Horizon', 'system-ui', 'sans-serif'],
        moontime: ['Moontime', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
