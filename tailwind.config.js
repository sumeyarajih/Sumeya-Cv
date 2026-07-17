/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cv: {
          bg: "#FDF2F8",
          sidebar: "#831843",
          sidebarSoft: "#9D174D",
          accent: "#EC4899",
          accentSoft: "#F472B6",
          accentPale: "#FBCFE8",
          accentLine: "#F9A8D4",
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
