import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg2: "#21262d",
        customBlue: "#0d1117",
        commitBlue: "#161b22",
        newGray: "#2f333b",
      },
    },
  },
  plugins: [],
};
export default config;
