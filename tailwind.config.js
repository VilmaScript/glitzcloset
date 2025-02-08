/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      animation: {
        'pop-color-change': 'pop-and-color-change 2s ease-in-out infinite', // Animation name with duration
      },
      keyframes: {
        'pop-and-color-change': {
          '0%': { transform: 'scale(1)', color: 'white' },
          '25%': { transform: 'scale(1.1)', color: '#705126' }, // Brown color
          '50%': { transform: 'scale(1)', color: 'white' },
          '75%': { transform: 'scale(1.1)', color: '#705126' },
          '100%': { transform: 'scale(1)', color: 'white' },
        },
      },
      colors: {
        primary: "#A37B5C",
        secondary: "#D2B48C",
      },
    },
  },
  plugins: [],
};
