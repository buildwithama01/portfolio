/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Token-mapped (follow CSS vars) ── */
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",

        /* ── Legacy aliases kept for backward compat ── */
        cream: "#FFFFFF",
        forest: "#F13D52",
        "forest-light": "#FF6173",
        "forest-dark": "#D92F45",
        ink: "#1A1A1A",
        "ink-muted": "#CFCFCF",
        "cream-dark": "#242424",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
