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
        "30vw": "30vw",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "highlight-image":
          "url('https://media.newyorker.com/photos/5dbafcc91b4a6700085a7a9b/master/w_2240,c_limit/Baker-FightClub.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
