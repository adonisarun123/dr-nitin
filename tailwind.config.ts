import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // Blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F3F4F6", // Gray-100
          foreground: "#111827",
        },
        accent: {
          DEFAULT: "#22C55E", // Green
          foreground: "#FFFFFF",
        },
        background: "#F3F4F6",
        surface: "#FFFFFF",
        text: {
          primary: "#111827",
          secondary: "#4B5563",
        },
        // Pastels for cards
        pastel: {
          cyan: "#ECFEFF",
          indigo: "#EEF2FF",
          pink: "#FDF2F8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
