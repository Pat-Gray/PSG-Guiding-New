/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'slate-blue': '#2A3342',
        'alpine-teal': '#2A9D8F',
        'rock-gray': '#4A5567',
        'snow-white': '#F8F9FA',
        'glacier-blue': '#E5E9F0',
        'dawn-orange': '#E76F51',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 