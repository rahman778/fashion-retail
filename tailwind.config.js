/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E42FD",
        mattBlack: "#0E0E0E",
     },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
     },
     boxShadow: {
      'custom': '3px 5px 6px 0px rgba(0,0,0,0.15)',
    }
    },
  },
  plugins: [],
}