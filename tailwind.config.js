/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 VERY IMPORTANT
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f0f4f0",
          100: "#dce7dc",
          600: "#6b8e6b",
          700: "#5a7a5a",
        },
      },
    },
  },
  plugins: [],
};
