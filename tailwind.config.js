/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  corePlugins: {
    preflight: false,

  },
  theme: {
    extend: {
      colors: {
        main: '#34C2F4',
        secondary: "#00323F",
        backgroundDark: {
          default: '#13181F',
          paper: '#171E27',
        },
      }
    },
  },
  plugins: [],
}