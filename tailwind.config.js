/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'gradient-y': 'gradient-y 3s ease infinite',
        'gradient-rotate': 'gradient-rotate 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
        },
        'gradient-rotate': {
          '0%': {
            'background-position': '0% 50%',
            'transform': 'rotate(0deg)',
          },
          '50%': {
            'background-position': '100% 50%',
            'transform': 'rotate(180deg)',
          },
          '100%': {
            'background-position': '0% 50%',
            'transform': 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
} 