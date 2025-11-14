/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2B7FDB",
          dark: "#1E5BA8",
          light: "#E8F2FC",
        },
      },
    },
  },
  plugins: [],
};
