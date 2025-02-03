/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'ibm': ['IBM Plex Mono', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
    },
  },
  plugins: [],
}

