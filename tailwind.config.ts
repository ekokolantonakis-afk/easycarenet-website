import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#061A2B",
          mid: "#0A2439",
          soft: "#0F2E47",
        },
        brand: {
          core: "#0A84FF",
          electric: "#2FD3FF",
          cyan: "#7FE7FF",
        },
        steel: "#A7B3C2",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(10, 132, 255, 0.25)",
        "glow-strong": "0 0 60px rgba(47, 211, 255, 0.35)",
        card: "0 8px 32px rgba(6, 26, 43, 0.6)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(10,132,255,0.15), transparent 60%)",
        "grid-pattern":
          "linear-gradient(rgba(167,179,194,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(167,179,194,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
