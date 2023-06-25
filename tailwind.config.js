/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: '#2C3333',
        text: '#F7FFE5',
      },
      screens: {
        'sm': '370px'
      }
    },
  },
  plugins: [],
}

