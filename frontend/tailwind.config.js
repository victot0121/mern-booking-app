/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Danfo:["Danfo", 'serif'],
        Sevillana:["Sevillana", 'cursive'],
        Lora: ["Lora","serif"]
      }
    },
    container: {
      padding: {
        md: "10rem",
      },
    }
  },
  plugins: [],
}

