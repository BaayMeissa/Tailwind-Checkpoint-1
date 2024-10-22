/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-categories':"url('https://img.freepik.com/vecteurs-libre/fond-technologie-numerique-fil-maille-reseau_1017-27428.jpg')",
        'background-form':"url('https://img.freepik.com/fotos-premium/lineas-blancas-abstractas-conectadas-sobre-fondo-gris_1174990-199792.jpg')"
      },      
    },
  },
  plugins: [],
}

