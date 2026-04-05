/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["'Sora'", "sans-serif"],
        dm: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        navy: "#0f172a",
        brand: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          pale: "#eff6ff",
          dark: "#1d4ed8",
        },
        accent: "#06b6d4",
      },
      animation: {
        pulse2: "pulse2 2s infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        pulse2: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0.4 },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
