/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ED799C', // Custom requested pink
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        cv: {
          bg: "#FDF2F8",
          sidebar: "#ED799C", // Updated to new pink
          sidebarSoft: "#f472b6",
          accent: "#ED799C",
          accentSoft: "#fbcfe8",
          accentPale: "#fdf2f8",
          accentLine: "#f9a8d4",
          textDark: "#1F2937",
          textBody: "#374151",
          textMuted: "#6B7280",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
