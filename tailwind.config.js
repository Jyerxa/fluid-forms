/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#1a1a1a',
      },
      colors: {
        'neon-purple': '#b967ff',
        'neon-pink': '#ff6ec4',
        'neon-green': '#54ffbd',
      },
      dropShadow: {
        '3xl': '0px 0px 10px rgba(84, 255, 189, 0.25)',
      }
    },
  },
  plugins: [],
}

