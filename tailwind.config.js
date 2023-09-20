/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        min: '280px',
        sm: '480px',
        '2sm': '590px',
        md: '768px',
        lg: '976px',
        '2lg': '1050px',
        xl: '1440px',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

