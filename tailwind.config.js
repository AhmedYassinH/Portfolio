/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: 'rgb(var(--bg-base) / <alpha-value>)',
          surface: 'rgb(var(--bg-surface) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)',
        },
        accent: {
          primary: 'rgb(var(--accent-primary) / <alpha-value>)',
          on: 'rgb(var(--accent-on) / <alpha-value>)',
        },
        border: {
          subtle: 'rgb(var(--border-subtle) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 24px 60px rgba(5, 12, 20, 0.16)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgb(var(--border-subtle) / 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--border-subtle) / 0.2) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
