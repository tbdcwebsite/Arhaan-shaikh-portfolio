import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      scale: {
        "108": "1.08",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "54": "13.5rem",
      },
      colors: {
        primary: "#CDF225",
        secondary: "#520000",
        tertiary: "#28282B",
        neutral: "#F8F8F5",
      },
      fontFamily: {
        sans: ["var(--font-mont)", "Mont", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["var(--font-butler)", "Butler", "Georgia", "serif"],
        mont: ["var(--font-mont)", "Mont", "sans-serif"],
        butler: ["var(--font-butler)", "Butler", "serif"],
        heading: ["var(--font-mont)", "Mont", "sans-serif"],
        headline: ["var(--font-mont)", "Mont", "sans-serif"],
        body: ["var(--font-mont)", "Mont", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
