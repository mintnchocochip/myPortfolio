/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/login/*.{jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'enigma-green': '#22EC08',
        'bg-black': '#111111',
        'bg-enigma-black': '#111111',
        'login-line': '#1cd41c', // Added for login component by Amiitesh
      },

      fontSize: {
        'big-xl': '45rem',
      },

      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ],
        'enigma-glow': [ // Glow for Enigma25 text in Login Page by Amiitesh
          '0 0 10px #1cd41c',
          '0 0 20px #1cd41c',
          '0 0 30px #1cd41c',
          '0 0 40px #1cd41c',
        ],
      },

      fontFamily: {
        'calcio': ['Calcio', 'sans-serif'],
        'mondwest': ['Mondwest', 'sans-serif'],
        'neuebit': ['NeueBit', 'sans-serif'],
        'montreal-medium': ['Montreal-Medium', 'sans-serif'],
        'montreal-book': ['Montreal-Book', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'] // Adding Orbitron Font by Amiitesh
      },
      keyframes: { // Keyframes for the login page by Amiitesh
        'roaming-line': {
          '0%': { borderColor: 'transparent #1cd41c transparent transparent' },
          '25%': { borderColor: 'transparent transparent #1cd41c transparent' },
          '50%': { borderColor: 'transparent transparent transparent #1cd41c' },
          '75%': { borderColor: '#1cd41c transparent transparent transparent' },
        },
        animation: {
        'roaming-line': 'roaming-line 1s linear infinite', // By Amiitesh for the animation 
      }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

