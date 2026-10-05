/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0A0D',       // Deepest obsidian black
          card: '#121218',       // Sleek dark charcoal card background
          cardBorder: '#1F1F2C', // Subtle athletic boundary border
          surface: '#181822',    // Slightly elevated surface
          muted: '#8F90A6',      // Premium muted silver/gray for text
          light: '#F4F4F8',      // Crisp off-white for headers
          purple: {
            50: '#FAF5FF',
            100: '#F3E8FF',
            200: '#E9D5FF',
            300: '#D8B4FE',
            400: '#C084FC',
            500: '#A855F7',
            600: '#9333EA',     // Core energetic purple
            700: '#7E22CE',     // Deep royal purple
            800: '#6B21A8',
            900: '#581C87',
            950: '#3B0764',
          },
          accent: '#22C55E',     // Fairway turf green accent for subtle golf highlights
          gold: '#F59E0B',       // Championship gold for PGA championship badges
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 0 25px -5px rgba(147, 51, 234, 0.35)',
        'purple-subtle': '0 4px 20px -2px rgba(126, 34, 206, 0.15)',
      }
    },
  },
  plugins: [],
}
