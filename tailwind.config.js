/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Nested version for reference (optional)
        furniture: {
          DEFAULT: "hsl(156,35%,35%)",
          light: "hsl(156,35%,45%)",
          dark: "hsl(156,35%,25%)",
          green: "hsl(156,35%,35%)",
          cream: "hsl(35,25%,90%)",
          warm: "hsl(25,55%,85%)",
          foreground: "hsl(0,0%,98%)",
        },
      },
    },
  },
  plugins: [],
};
