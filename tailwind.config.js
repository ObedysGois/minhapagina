/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Corporate neutral tones
        graphite: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9de',
          300: '#b8b8c1',
          400: '#91919f',
          500: '#737384',
          600: '#5d5d6c',
          700: '#4c4c58',
          800: '#41414b',
          900: '#393941',
          950: '#1a1a1f',
        },
        // Subtle green accent (forest/moss)
        forest: {
          50: '#f3f6f4',
          100: '#e2ebe4',
          200: '#c6d7cb',
          300: '#9fbba8',
          400: '#739a80',
          500: '#527b62',
          600: '#3f624d',
          700: '#344f40',
          800: '#2c4035',
          900: '#25352d',
          950: '#131d19',
        },
        // Blue petrol accent
        petrol: {
          50: '#f2f7f9',
          100: '#ddeaf0',
          200: '#bfd6e2',
          300: '#93b9cd',
          400: '#6094b0',
          500: '#457896',
          600: '#3c627e',
          700: '#355169',
          800: '#314558',
          900: '#2c3b4b',
          950: '#1d2731',
        },
        // Steel gray for borders and subtle UI
        steel: {
          50: '#f6f7f8',
          100: '#ebedef',
          200: '#d3d8dc',
          300: '#adb6be',
          400: '#818d99',
          500: '#63707e',
          600: '#4f5a66',
          700: '#414a53',
          800: '#383f47',
          900: '#32383e',
          950: '#21252a',
        },
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
