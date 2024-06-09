/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'ralewey': ['Raleway', 'sans-serif'],
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

