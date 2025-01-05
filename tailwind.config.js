/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/login/*.jsx",
    "./src/signup/*.jsx"
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
          '0%': { 
            'border-width': '2px',
            'border-style': 'solid',
            'border-color': '#1cd41c transparent transparent transparent'
          },
          '25%': { 
            'border-width': '2px',
            'border-style': 'solid',
            'border-color': 'transparent #1cd41c transparent transparent'
          },
          '50%': { 
            'border-width': '2px',
            'border-style': 'solid',
            'border-color': 'transparent transparent #1cd41c transparent'
          },
          '75%': { 
            'border-width': '2px',
            'border-style': 'solid',
            'border-color': 'transparent transparent transparent #1cd41c'
          },
          '100%': { 
            'border-width': '2px',
            'border-style': 'solid',
            'border-color': '#1cd41c transparent transparent transparent'
          }
        }
      },
      animation: {
        'roaming-line': 'roaming-line 2s linear infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
