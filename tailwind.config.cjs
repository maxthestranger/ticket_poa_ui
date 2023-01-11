/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#f7f7f7",
        dark: "#03314b",
        success: "#2fd134",
        primary: "#1cbe8e",
        info: "#2965ff",
        muted: "#94a3b7",
        place: "#D5D5D5",
        input: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
