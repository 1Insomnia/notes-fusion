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
      fg: {
        DEFAULT: '#181818',
        d: '#000'
      },
      bg: {
        DEFAULT: '#f9fafb',
        l: '#fff',
        d: '#e1e1e1',
        input: '#333333'
      },
      primary: {
        DEFAULT: '#E43F62',
        50: '#FBE0E6',
        100: '#F8CED7',
        200: '#F3AABA',
        300: '#EE879C',
        400: '#E9637F',
        500: '#E43F62',
        600: '#CE1D43',
        700: '#9D1633',
        800: '#6C0F23',
        900: '#3A0813',
        950: '#22050B'
      },
      secondary: {
        DEFAULT: '#3FE4C1',
        50: '#E0FBF5',
        100: '#CEF8EF',
        200: '#AAF3E4',
        300: '#87EED8',
        400: '#63E9CD',
        500: '#3FE4C1',
        600: '#1DCEA8',
        700: '#169D80',
        800: '#0F6C58',
        900: '#083A30',
        950: '#05221C'
      },
      bd: {
        DEFAULT: 'rgba(24, 24, 24, 0.15)'
      },
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
