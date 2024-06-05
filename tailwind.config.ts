import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: { "2/3": "2 / 3" },
      height: {
        "56vw": "56vw",
        "40vw": "40vw",
        "30vh": "30vh",
        "65vh": "65vh",
        "150full": "150vh",
      },
      width: {
        "150full": "150vw",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
