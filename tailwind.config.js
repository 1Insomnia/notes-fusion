/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extends: {
      height: {
        vp: 'calc(100vh - 64px)'
      }
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      fg: {
        DEFAULT: 'rgba(255, 255, 255, 0.92)',
        b: '#fff',
        l: ' rgba(255, 255, 255, 0.1)'
      },
      bg: {
        DEFAULT: '#202023',
        l: '#313134'
      },
      primary: '#81e6d9',
      secondary: '#FF63C3',
      error: '#ff2a64'
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
