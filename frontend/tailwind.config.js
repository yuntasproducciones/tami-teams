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
      },
      screens: {
        'custom': '1026px',
        'above1026': { 'min': '1027px' },
        'img-xs': { min: '325px', max: '767px' },
        'xs': '325px'
      },
    },
  },
  plugins: [],
}