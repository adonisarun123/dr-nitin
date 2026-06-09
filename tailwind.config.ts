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
          // Full numeric scale aligned with Tailwind's blue palette so classes
          // like `bg-primary-600`, `text-primary-100`, `ring-primary-500`
          // resolve correctly. DEFAULT matches blue-600 to preserve the
          // historical `bg-primary` / `text-primary` colour.
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
          DEFAULT: "#2563EB",
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
