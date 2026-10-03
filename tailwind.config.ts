import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E9DF7",
        secondary: "#FFC93C",
        accent: "#FF6B6B",
        success: "#34C759",
        ink: "#1F2937",
        cloud: "#F8FAFC",
      },
      borderRadius: {
        xl2: "24px",
        xl3: "32px",
      },
      fontFamily: {
        heading: ["var(--font-baloo)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(18px, -12px) scale(1.08)" },
          "66%": { transform: "translate(-14px, 12px) scale(0.94)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 18s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
