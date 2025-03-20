/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0a1f44",  // Dark Blue (Deep Navy)
          200: "#002f6c",  // Rich Royal Blue
          300: "#0057b7",  // Bright Electric Blue
          400: "#0084ff",  // Neon Blue
          500: "#00aaff",  // Sky Blue Shine
        },
        secondary: {
          100: "#3e1f0b",  // Deep Amber Brown
          200: "#663f10",  // Rich Orange Brown
          300: "#cc5a00",  // Deep Burnt Orange
          400: "#ff7300",  // Bright Neon Orange
          500: "#ffa533",  // Golden Orange Shine
        },
        accent: {
          100: "#1a1a2e",  // Almost Black (Background)
          200: "#121c42",  // Midnight Blue
          300: "#2c2a4a",  // Dark Indigo
          400: "#3e3b6b",  // Purple-Blue Tint
          500: "#5c57a0",  // Electric Indigo
        },
      },
    },
  },
  plugins: [],
};
