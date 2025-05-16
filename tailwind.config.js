/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': 'var(--primary-color)',
      'secondary': 'var(--secondary-color)',
      'terciary': 'var(--terciary-color)',
      'background': 'var(--background-color)'
    },
    extend: {},
  },
  plugins: [],
}

