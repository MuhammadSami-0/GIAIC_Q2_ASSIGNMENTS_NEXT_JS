import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      mob:"428px",
    },
    extend: {
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height:{
        lg:'800px',
        llg:'950px',
        xl:'1100px',
        xxl:'1742px',
        vl:'2230px',
        ch:'534px'
      },
      width:{
        lg:'640px',
        sm:'428px',
        xl:'1280px'
      }
    },
  },
  plugins: [],
} satisfies Config;
