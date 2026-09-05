/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF7E8',
          100: '#F6ECC8',
          200: '#EDD894',
          300: '#E4C560',
          400: '#D4AF37', // primary champagne gold
          500: '#C5A059',
          600: '#A68238',
          700: '#876624',
          800: '#684B15',
          900: '#4D360C',
          light: '#F8ECC2',
          DEFAULT: '#D4AF37',
          dark: '#9A7B2C',
        },
        velvet: {
          950: '#070708', // pure obsidian noir
          900: '#0C0C0E',
          850: '#121215',
          800: '#18181D',
          700: '#232228',
          600: '#32313A',
        },
        ivory: {
          50: '#FDFBF7',
          100: '#F9F6EE',
          200: '#F0ECE1',
          300: '#E5DFD0',
          400: '#C8C1B0',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
        arabic: ['"Amiri"', 'serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #F8ECC2 0%, #D4AF37 50%, #8E6D18 100%)',
        'gold-foil': 'linear-gradient(90deg, #C5A059 0%, #F5E296 35%, #D4AF37 60%, #E6CA65 85%, #B88E33 100%)',
        'radial-vignette': 'radial-gradient(circle at center, rgba(30, 26, 20, 0.4) 0%, rgba(7, 7, 8, 0.95) 100%)',
        'dark-card': 'linear-gradient(180deg, rgba(24, 24, 29, 0.75) 0%, rgba(12, 12, 14, 0.85) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.35)',
        'inner-gold': 'inset 0 0 15px rgba(212, 175, 55, 0.2)',
      },
      animation: {
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSlow 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.8', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.25)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
