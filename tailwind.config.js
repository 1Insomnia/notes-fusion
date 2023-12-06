/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extends: {
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px'
      },
      height: {
        'screen-cropped': 'calc(100vh - 64px)'
      },
      minHeight: {
        vp: '1000px'
      }
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      background: 'hsl(0 0% 100%)',
      foreground: 'hsl(240 10% 3.9%)',
      card: {
        foreground: 'hsl(240 10% 3.9%)',
        background: 'hsl(0 0% 100%)'
      },
      popover: {
        foreground: 'hsl(240 10% 3.9%)',
        background: 'hsl(0 0% 100%)'
      },
      primary: {
        foreground: 'hsl(355.7 100% 97.3%)',
        background: 'hsl(142.1 76.2% 36.3%)'
      },
      secondary: {
        foreground: 'hsl(355.7 100% 97.3%)',
        background: 'hsl(240 4.8% 95.9%)'
      },
      muted: {
        foreground: 'hsl(240 3.8% 46.1%)',
        background: 'hsl(240 4.8% 95.9%)'
      },
      accent: {
        foreground: 'hsl(240 5.9% 10%',
        background: 'hsl(240 4.8% 95.9%)'
      },
      destructive: {
        foreground: 'hsl(0 0% 98%)',
        background: 'hsl(0 84.2% 60.2%)'
      },
      border: 'hsl(240 5.9% 90%)',
      input: 'hsl(240 5.9% 90%)',
      ring: 'hsl(142.1 76.2% 36.3%)',
      error: 'hsl(0, 72%, 51%)',
      warning: 'hsl(48, 96%, 53%)'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px'
      }
    }
  },
  plugins: []
}
