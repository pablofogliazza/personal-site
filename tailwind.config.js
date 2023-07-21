/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
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
        accent: '#42BBA1',
        light: '##F3F8F9',
        dark: '#1B2025',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['p22-mackinac-pro', 'serif'],
      },
    },
  },
  plugins: [],
}
