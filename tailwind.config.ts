import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      fontSize: {
        // new bigger scale
        'display': ['72px', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '800' }],
        'h1': ['56px', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h2': ['44px', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '500' }],
        'body': ['17px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['13px', { lineHeight: '1', letterSpacing: '0.18em', fontWeight: '700' }],
      }
    },
  },
  plugins: [],
};
export default config;