/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'ralewey': ['Raleway', 'sans-serif'],
      },
      keyframes: {
        sino_kf: {
          '0%, 100%': {
            transform: 'rotate(-10deg)',
          },
          '50%': {
            transform: 'rotate(10deg)'
          }
        },
      },
      animation: {
        sino: 'sino_kf 0.31s ease-in-out infinite',
      },
      colors: {
        azul: {
          claro: '#C5DFFF',
          escuro: '#061E3C',
          hover: '#1057b0',
        }
      }
    },
  },
  plugins: [],
}