import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        grotesk: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#0a0a0a',
        'surface-container': '#1a1a1a',
        'surface-container-low': '#141414',
        'surface-container-lowest': '#0e0e0e',
        'on-background': '#e5e2e1',
        'on-surface': '#e5e2e1',
        'on-surface-variant': '#b9cacb',
        'primary': '#00dbe7',
        'primary-fixed': '#74f5ff',
        'primary-fixed-dim': '#00dbe7',
        'secondary': '#b600f8',
        'secondary-fixed-dim': '#ebb2ff',
        'tertiary': '#faf6ff',
        'tertiary-fixed-dim': '#c3c0ff',
        'outline-variant': '#3a494b',
      },
      spacing: {
        'gutter': '24px',
        'stack-sm': '16px',
        'stack-md': '32px',
        'stack-lg': '80px',
      },
      maxWidth: {
        'container': '1280px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};