/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'puerto-rico': {
          50: '#f2fbf8',
          100: '#d2f5ea',
          200: '#a6e9d6',
          300: '#71d7be',
          400: '#42bba1',
          500: '#2ba189',
          600: '#208170',
          700: '#1d685b',
          800: '#1c534b',
          900: '#1b463f',
          950: '#0a2925',
        },
        shark: {
          50: '#f5f7f8',
          100: '#dfe5e8',
          200: '#bfcad0',
          300: '#97a7b1',
          400: '#718490',
          500: '#576875',
          600: '#44525d',
          700: '#39434c',
          800: '#30383f',
          900: '#2b3136',
          950: '#1b2025',
        },
        caccent: '#42BBA1',
        clight: '#F3F8F9',
        cdark: '#1B2025',
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        serif: ['p22-mackinac-pro', 'serif'],
      },
    },
  },
  plugins: [],
}
