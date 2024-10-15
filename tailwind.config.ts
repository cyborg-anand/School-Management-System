import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        metaSky: "#4285F4",
        metaSkyLight: "#87CEEB",
        metaGreen: "#1FD655",
        metaGreenLight: "#CEEAD6",
        metaYellow: "#F4B400",
        metaYellowLight: "#FFFFC5",
      },
    },
  },
  plugins: [],
};
export default config;
