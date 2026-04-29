import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#C5A059",
          "primary-dark": "#997A3F",
          "primary-light": "#DDC288",
          accent: "#D9A679",
          "accent-dark": "#C18F61",
          "accent-light": "#ECC8A6",
          background: "#FDF8EE",
          cream: "#FAF1DE",
          ink: "#2A2418",
          muted: "#7A6F58",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-dmsans)", "DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 24px rgba(197, 160, 89, 0.10), 0 2px 6px rgba(197, 160, 89, 0.06)",
        glow: "0 12px 40px rgba(217, 166, 121, 0.28), 0 4px 12px rgba(197, 160, 89, 0.12)",
        "card-hover":
          "0 18px 48px rgba(197, 160, 89, 0.20), 0 6px 16px rgba(197, 160, 89, 0.10)",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-up-delay": "slideUp 0.8s ease-out 0.15s forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.5s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(217, 166, 121, 0.38), transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
