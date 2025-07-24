/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Custom dark theme colors
        dark: {
          bg: '#0f172a',        // slate-900
          surface: '#1e293b',   // slate-800
          card: '#334155',      // slate-700
          border: '#475569',    // slate-600
          text: '#f8fafc',      // slate-50
          muted: '#cbd5e1',     // slate-300
        }
      }
    },
  },
  plugins: [],
}