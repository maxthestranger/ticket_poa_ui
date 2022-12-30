/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#f7f7f7",
        dark: "#020202",
        success: "#2fd134",
        primary: "#efa638",
        info: "#2965ff",
        muted: "#63687A",
        place: "#D5D5D5",
        input: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
