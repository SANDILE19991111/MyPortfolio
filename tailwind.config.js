/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00f0ff',
        secondary: '#ff006e',
        accent: '#8338ec',
        dark: '#0a0e27',
        darker: '#050812'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00f0ff 0%, #8338ec 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #ff006e 0%, #00f0ff 100%)',
        'gradient-dark': 'radial-gradient(circle at 20% 50%, #8338ec 0%, #0a0e27 50%)',
        'grid-pattern': 'linear-gradient(0deg, transparent 24%, rgba(0, 240, 255, 0.05) 25%, rgba(0, 240, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 240, 255, 0.05) 75%, rgba(0, 240, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 240, 255, 0.05) 25%, rgba(0, 240, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 240, 255, 0.05) 75%, rgba(0, 240, 255, 0.05) 76%, transparent 77%, transparent)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in': 'fade-in 0.8s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 240, 255, 0.6)' }
        },
        'pulse-glow': {
          '0%': { opacity: 0.5 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.5 }
        },
        'slide-in': {
          'from': { transform: 'translateX(-100%)', opacity: 0 },
          'to': { transform: 'translateX(0)', opacity: 1 }
        },
        'fade-in': {
          'from': { opacity: 0 },
          'to': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
