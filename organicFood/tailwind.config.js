// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ← includes all folders under src
  ],
  theme: {
    extend: {
      // your custom theme (colors, etc.)
    },
  },
  plugins: [],
};