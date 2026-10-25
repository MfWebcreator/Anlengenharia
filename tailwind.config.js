/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta extraída do portfólio (PDF)
        ink: "#0a1f2e",      // fundo dos slides
        abyss: "#061622",    // fundo mais profundo (seções escuras)
        deep: "#083f46",     // cabeçalho das tabelas
        brand: "#00bfa5",    // verde/teal dos títulos e linhas
        forest: "#00806f",   // verde escuro (botões e cartões, no lugar do azul do design)
        mint: "#7ff0dc",
        paper: "#f3f4f4",
      },
      fontFamily: {
        sans: ['"Manrope"', "system-ui", "sans-serif"],
        display: ['"Inter Tight"', '"Manrope"', "system-ui", "sans-serif"],
        head: ['"Poppins"', '"Manrope"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
