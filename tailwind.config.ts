import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // display / headings
        'display': ['clamp(40px,8vw,72px)', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '800' }],
        'h1': ['clamp(32px,6vw,56px)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h2': ['clamp(28px,4.5vw,44px)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        // body
        'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '500' }],
        'body': ['17px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['11px', { lineHeight: '1', letterSpacing: '0.18em', fontWeight: '700' }],
      },
      colors: {
        brand: {
          DEFAULT: "#0B1B33",
          gold: "#D9A24B",
          goldHover: "#c89131",
          paper: "#F7F5F1",
        }
      },
      maxWidth: {
        site: "1440px",
      },
      borderRadius: {
        xl2: "20px",
        xl3: "24px",
      }
    },
  },
  plugins: [],
};

export default config;