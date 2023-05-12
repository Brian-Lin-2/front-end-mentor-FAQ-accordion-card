/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-pattern': "url('/images/bg-pattern-mobile.svg')",
        'desktop-pattern': "url('/images/bg-pattern-desktop.svg')",
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      },
      colors: {
        'very-dark-desat-blue': 'hsl(238, 29%, 16%)',
        'soft-red': 'hsl(14, 88%, 65%)',
        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',
        'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'dark-grayish-blue': 'hsl(240, 6%, 50%)',
        'light-grayish-blue': 'hsl(240, 5%, 91%)',
      },
      inset: {
        '5px': '-5px',
      }
    },
  },
  plugins: [],
}

