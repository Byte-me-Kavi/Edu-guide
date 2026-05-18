import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B3A5C",
          deep: "#122842",
          ink: "#0E1F33",
          soft: "#2C5380",
        },
        gold: {
          DEFAULT: "#E8A317",
          warm: "#C98908",
          soft: "#F2C56B",
          pale: "#FBE3A8",
        },
        cream: {
          DEFAULT: "#F5EDE0",
          deep: "#EFE3D0",
          paper: "#FAF4E8",
        },
        ink: "#1A1410",
        dust: "#D4C8B0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-instrument-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
