/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        primary: "#a855f7",
        secondary: "#ec4899",
        dark: "#0f0f0f",
        card: "#18181b",
        success: "#22c55e",
        error: "#ef4444",
      },

      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },

      animation: {
        shimmer: "shimmer 2s infinite",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 30px rgba(168, 85, 247, 0.4)",
      },

      backgroundImage: {
        gradient:
          "linear-gradient(to right, #a855f7, #ec4899)",
      },

    },
  },

  plugins: [],
};0