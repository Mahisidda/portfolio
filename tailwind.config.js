/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'], // Your existing Geist Sans
        mono: ['var(--font-geist-mono)'], // Your existing Geist Mono
        'homemade-apple': ['"Homemade Apple"', 'cursive'], // Added Homemade Apple
      },
      // ... any other extensions you have
    },
  },
  plugins: [],
}; 