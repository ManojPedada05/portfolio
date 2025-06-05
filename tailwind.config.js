/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#dae2ff',
          200: '#baccff',
          300: '#8fa9ff',
          400: '#5f7dfc',
          500: '#3e5ef7',
          600: '#2f43ee',
          700: '#2739dd',
          800: '#1c2fb4',
          900: '#192a8f',
          950: '#131a4d',
        },
        secondary: {
          50: '#fefbe8',
          100: '#fff8c2',
          200: '#ffef86',
          300: '#ffe047',
          400: '#ffcf1a',
          500: '#ffb800',
          600: '#e29000',
          700: '#bb6902',
          800: '#985108',
          900: '#7c420d',
          950: '#482200',
        },
        dark: {
          100: '#d5d7e0',
          200: '#acafc1',
          300: '#8287a2',
          400: '#595f83',
          500: '#2f3757',
          600: '#252c46',
          700: '#1c2134',
          800: '#121623',
          900: '#090b11',
          950: '#050608',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'skill-progress': 'skill-progress 1.5s ease-in-out',
      },
      keyframes: {
        'skill-progress': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};