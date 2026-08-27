/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF3F7",
          100: "#D3E0EA",
          300: "#7C9AB3",
          500: "#2C5578",
          700: "#173A57",
          900: "#0F2C4C",
          950: "#0A1E33",
        },
        teal: {
          50: "#E7F2EF",
          100: "#C3E1DA",
          300: "#6BAE9E",
          500: "#1F8672",
          700: "#12695B",
          900: "#0B4038",
        },
        gold: {
          50: "#FBF3DE",
          100: "#F3E1A6",
          300: "#E8C458",
          500: "#D9A62E",
          700: "#A87A16",
        },
        brick: {
          100: "#F4DCD3",
          300: "#E09A81",
          500: "#B3432B",
          700: "#832F1F",
        },
        paper: {
          DEFAULT: "#F4F6F5",
          card: "#FFFFFF",
          line: "#DCE3E1",
        },
        ink: {
          DEFAULT: "#16232E",
          soft: "#4B5B66",
          faint: "#7C8B94",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 44, 76, 0.06), 0 8px 24px -12px rgba(15, 44, 76, 0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
