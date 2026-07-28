import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        "brand-yellow": "#FEDD00",
        "brand-purple": "#4A2B6D",
        "brand-pink": "#F8306D",
        "deep-purple": "#2D1B4E",
        magenta: "#E91E63",
        sapphire: "#0F3460",
        coral: "#FF6B6B",
        "light-gray": "#F5F5F5",
        "deep-dark": "#0A0E27",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, rgba(10,14,27,0.92) 0%, rgba(45,27,78,0.85) 50%, rgba(15,52,96,0.8) 100%)",
        "gold-gradient": "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(45,27,78,0.6) 0%, rgba(15,52,96,0.4) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 48s linear infinite",
        "spin-slower": "spin 90s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
