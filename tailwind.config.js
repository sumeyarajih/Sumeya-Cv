/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cv: {
          bg: "#FDF2F8",
          sidebar: "#b46a45",
          sidebarSoft: "#b46a45",
          accent: "#b46a45",
          accentSoft: "#f2d4af",
          accentPale: "#f2d4af",
          accentLine: "#f2d4af",
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
