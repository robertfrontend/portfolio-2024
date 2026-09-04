/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: "#5e17eb",
        violet: {
          50: "#f6f3ff",
          100: "#ede8ff",
          200: "#ddd4fe",
          300: "#c3b2fd",
          400: "#9f7df9",
          500: "#7e41f2",
          600: "#5e17eb",
          700: "#4f0fd0",
          800: "#420fa9",
          900: "#370e88",
          950: "#1f0559",
          DEFAULT: "#5e17eb",
        },
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#7e41f2",
          600: "#5e17eb",
          700: "#4f0fd0",
          800: "#420fa9",
          900: "#370e88",
          DEFAULT: "#5e17eb",
        },
        "dark-purple": "#0f022e",
        "studio-dark": "#0a0f18",
        "studio-card": "#111827",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
      },
    },
  },
  daisyui: {
    // no dark mode
    themes: ["light"],
  },

  plugins: [require("daisyui")],
};
