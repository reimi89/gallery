import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      backgroundImage: {
        hero: 'url(/assets/img/main.jpg)',
      },
    },
    fontFamily: {
      Almendra_SC: 'var(--font-almendra-sc)',
      Alumni_Sans: 'var(--font-alumni-sans)',
    },
    colors: {
      nav: '#8FA6C1',
      all: '#6B8EB6',
      text: '#FFFFFF',
      accent: '#9DBBDD'
    }
  },
  plugins: [],
};
export default config;
