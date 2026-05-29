/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        graphite: '#111113',
        graphiteSoft: '#1a1a1d',
        champagne: '#f8e7bd',
        gold: '#d8a83d',
        goldDeep: '#9b6a17',
        pearl: '#f5efe4',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #fff5cc 0%, #d8a83d 34%, #916012 68%, #fff0bd 100%)',
        'dark-radial':
          'radial-gradient(circle at 24% 12%, rgba(216,168,61,0.22), transparent 32%), radial-gradient(circle at 82% 18%, rgba(255,237,184,0.12), transparent 28%), linear-gradient(145deg, #050505 0%, #111113 50%, #050505 100%)',
      },
      boxShadow: {
        gold: '0 0 42px rgba(216,168,61,0.25)',
        'gold-soft': '0 24px 70px rgba(216,168,61,0.14)',
        glass: '0 20px 80px rgba(0,0,0,0.45)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.82', transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.4s ease-in-out infinite',
        breathe: 'breathe 6s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
