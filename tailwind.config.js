import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: {files:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/login/*.jsx",
    "./src/signup/*.jsx"
  ],
  extract},

  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        'enigma-green': '#22EC08',
        'bg-black': '#111111',
        'bg-enigma-black': '#111111',
        'login-line': '#1cd41c', // Added for login component by Amiitesh
      },

      fontSize: {
        'big-phone-xl': '55vw',
        'big-desktop-xl': '58vw',
      },
      height: {
        'big-height': '110vh',
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
      },
      keyframes: { // Keyframes for the login page by Amiitesh
        border: {
          '0%': { 
            borderTopColor: '#1cd41c',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent'
          },
          '25%': {
            borderTopColor: 'transparent',
            borderRightColor: '#1cd41c',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent'
          },
          '50%': {
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: '#1cd41c',
            borderLeftColor: 'transparent'
          },
          '75%': {
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: '#1cd41c'
          },
          '100%': {
            borderTopColor: '#1cd41c',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent'
          }
        },
        glow: {
          '0%, 100%': {
            textShadow: '0 0 10px #1cd41c, 0 0 20px #1cd41c, 0 0 30px #1cd41c, 0 0 40px #1cd41c'
          },
          '50%': {
            textShadow: '0 0 20px #1cd41c, 0 0 30px #1cd41c, 0 0 40px #1cd41c, 0 0 50px #1cd41c'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      },
      animation: {
        border: 'border 2s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite'
      }
    },
  },
  plugins: [fluid],
}
