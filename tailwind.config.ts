import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Retro Notepad/Parchment Aesthetic
        parchment: '#FFF9E6',        // Aged paper yellow
        cream: '#FFFEF0',            // Light cream
        notepad: '#FEFBF3',          // Notepad white
        leather: '#5C4033',
        burgundy: '#8B3A3A',
        gold: '#D4AF37',
        ink: '#2C1810',              // Deep brown ink
        charcoal: '#3E3633',
        sage: '#6B7C5B',
        stone: '#8C8474',
        rose: '#B87873',
        amber: '#E6A963',
        moss: '#7A8B6F',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
        retro: ['Courier New', 'monospace'],
        pixel: ['Press Start 2P', 'monospace'],
        vt323: ['VT323', 'monospace'],
      },
      spacing: {
        xs: '6px',
        sm: '12px',
        md: '20px',
        lg: '32px',
        xl: '48px',
        xxl: '64px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      letterSpacing: {
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.15em',
      },
    },
  },
  plugins: [],
};

export default config;

