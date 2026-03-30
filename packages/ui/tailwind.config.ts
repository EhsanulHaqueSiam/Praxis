import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
    "../../apps/web/src/**/*.{ts,tsx}",
    "../../apps/app/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Outfit"', "system-ui", "sans-serif"],
        body: ['"Outfit"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        accent: {
          50: "#f2faf6",
          100: "#dff5ea",
          200: "#c0ead5",
          300: "#91d8b5",
          400: "#5abf8e",
          500: "#38a571",
          600: "#28845a",
          700: "#236a4a",
          800: "#20553d",
          900: "#1d4634",
          950: "#0d281e",
        },
        violet: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      boxShadow: {
        diffuse: "0 20px 40px -15px rgba(0, 0, 0, 0.05)",
        "diffuse-lg": "0 30px 60px -20px rgba(0, 0, 0, 0.08)",
        "diffuse-hover": "0 24px 50px -18px rgba(0, 0, 0, 0.12)",
        inner: "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "glow-sm": "0 0 8px rgba(56, 165, 113, 0.12)",
        "glow-md": "0 0 20px rgba(56, 165, 113, 0.15)",
        "glow-accent": "0 0 16px rgba(56, 165, 113, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up": "fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-left": "slideLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-right": "slideRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee 40s linear infinite reverse",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "gradient-x": "gradientX 6s ease infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(56, 165, 113, 0.1)" },
          "50%": { boxShadow: "0 0 20px rgba(56, 165, 113, 0.2)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
