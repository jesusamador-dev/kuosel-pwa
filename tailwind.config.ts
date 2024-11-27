import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F45D2D',  // Primary color 1
        primaryA10: 'rgba(244, 93, 45, .1)',  // Primary color 1
        secondary: '#816CF9', // Secoundry color
        secondaryLight: '#AAAAAA', // Secondary color (más claro)
        font: '#000000', // Font color
        grayPrincipal: '#F7F8F9', // BG color
        whiteBg: '#FFFFFF', // White BG
        grayEEE: '#EEEEEE', // EEE
        grayCCC: '#CCCCCC', // CCC
        grayAAA: '#AAAAAA', // AAA
        whiteA15: 'rgba(255, 255, 255, 0.15)', // 10% opacity
        housing: '#F45D2D', // Housing color
        food: '#816CF9', // Food color
        saving: '#C9D8F0', // Saving color
      },
      borderRadius: {
        '15px': '15px',
        '30px': '30px',
      },
      boxShadow: {
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
} satisfies Config;
