/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT: '#F28705',
          500: '#F28705',
          600: '#F28800',
          50: '#FEF3E6'
        },
        black:{
          DEFAULT: '#1A1A1A'
        },
        grey:{
          10:'#1C1C1C',
          20:'#FAFAFA',
        }
      }
    },
  },
  plugins: [],
}

