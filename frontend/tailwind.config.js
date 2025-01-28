
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Rutas donde se encuentran tus archivos que usan Tailwind
  ],
  theme: {
    extend: {
      colors: {
        "verde_turquesa": "#009e9c",
        mediumturquoise: '#289190',
        "verde2": "#037070"



      }
    },
  },
  plugins: [],
}
