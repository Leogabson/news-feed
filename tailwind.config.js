/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2B7FDB",
          dark: "#1E5BA8",
          light: "#E8F2FC",
        },
        dark: {
          DEFAULT: "#1A1A1A",
          secondary: "#2D3748",
          card: "#1E293B",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#4A5568",
          light: "#718096",
        },
        background: {
          DEFAULT: "#FFFFFF",
          gray: "#F7FAFC",
          dark: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};
