/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        react: "#61DAFB",
        mongodb: "#4DB33D",
        ejs: "#3C8DBC",
        nodejs: "#8CC84B",
        cpp: "#00599C",
        javascript: "#F7DF1E",
      },
    },
  },
  plugins: [],
};
