/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        violet: "#5D22EB",
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
