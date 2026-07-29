module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#101820',
        core: '#0c4a6e',
        highlight: '#d97706',
        surface: '#f8fafc',
      },
      boxShadow: {
        glow: '0 25px 60px rgba(16,24,40,0.09)',
        soft: '0 10px 30px rgba(16,24,40,0.08)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 600ms ease-out both',
      },
    },
  },
  plugins: [],
};
