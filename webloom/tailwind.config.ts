import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-0": "#F3AF81",
        "primary-1": "#F8CFB3",
        "primary-2": "#FDEFE6",
        "accent-red": "#F4775B",
        "accent-blue": "#186FD7",
        "background-0": "#F5F5F5",
        "background-1": "#E0E0E0",
        "gray-0": "#7C7C7C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-bloom": "linear-gradient(180deg, rgba(248, 207, 179, 0.90) 0%, rgba(248, 207, 179, 0.90) 56.5%, rgba(243, 175, 129, 0.90) 100%)"
      },
      boxShadow: {
        "button": "0px 1px 2px 0px rgba(0, 0, 0, 0.25)",
        "onboard": "0px 0px 10px 0px rgba(0, 0, 0, 0.13)",
      }
    },
  },
  plugins: [],
};
export default config;
