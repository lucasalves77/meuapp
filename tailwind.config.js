import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'bgMenu': '#09090b',
      'textWhite': '#d8dbe0',
      'bgBack': '#0a0a0a',
      'bgInput': '#171717',
      'bgButton': '#082f49',
      'bgHover': '#2A2E37',
    },
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
  ],
}