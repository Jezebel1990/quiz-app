import type { Config } from "tailwindcss";

import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand:['var(--font-quicksand)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
};
export default config;
