import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Animation classes
    'animate-fade',
    'animate-slide', 
    'animate-roll',
    // Grid classes
    'grid-2',
    'grid-3',
    'grid-4',
    // Button variants
    'btn',
    'btn-primary',
    'btn-secondary',
    'btn-sm',
    // Card variations
    'card',
    // Spacing utilities commonly used
    'container',
    'scroll-section',
    // Typography
    'small',
    // Theme classes
    'theme-black-neon',
    'daypart-am',
    'daypart-pm', 
    'daypart-night',
    // Accent color
    'text-accent',
    'bg-accent',
    'border-accent',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FF5300',
        'bg-black': '#0A0A0A',
        'bg-white': '#FFFFFF',
        'text-white': '#FFFFFF',
        'text-black': '#000000',
        'text-gray': '#666666',
      },
      fontFamily: {
        display: ['Oswald', 'system-ui', 'sans-serif'],
        base: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: '17px',
      },
      lineHeight: {
        base: '1.6',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
      },
      borderRadius: {
        'sm': '12px',
        'md': '20px',
        'lg': '28px',
      },
      transitionTimingFunction: {
        'fast': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'base': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'slow': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '0.15s',
        'base': '0.3s',
        'slow': '0.5s',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config