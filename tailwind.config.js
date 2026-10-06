/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        react : "#61DAFB",
        fast: "#00C7B7",
        postgres: "#5B9BD5",
        kubernetes: "#326CE5",
        git: "#F05032",
        python: "#3776AB",
      },
    },
  },
  plugins: [],
};
