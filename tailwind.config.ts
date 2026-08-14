import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Meiryo", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
        japanese: ["var(--font-shippori-mincho)", "serif"],
      },
      letterSpacing: {
        'luxury': '0.08em',
        'wide': '0.05em',
        'wider': '0.1em',
      },
    },
  },
  plugins: [],
};
export default config;
