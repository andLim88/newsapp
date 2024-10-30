/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '3px 4px 0px 1px #000',
        '2xl': '2px 4px 0px 1px #000',
      },
    },
  },
  plugins: [],
}

