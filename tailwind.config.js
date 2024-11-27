/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlack: "#000000",
        neonBlue: "#00d0ff",
        neonPink: "#ff2b89",
      },
    },
  },
  plugins: [require("daisyui")],
};
