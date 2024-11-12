/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'extrasmall': '360px',
        'xs': '415px',
        'header-sm': '500px',
        'sl': '1322px',
        'home-container': '1305px',
        'home-upper': '1209px',
        'header-special': '1142px',
        'medium': '946px',
        'medium2': '1096px',
        'medium3': '1200px',
        'header-fixer': '810px',
        'font-changer': '1550px',
        'font-changer2': '1700px',
        'font-changer3': '1000px',
        '2xl': '1536px',
      },
      lineHeight: {
        'extra-tight': '1.4',
        'tight': '1.7',
        'loose': '1.8',
        'extra-loose': '2',
        'extra-loose3': '3',
      },
    },
  },
  plugins: [],
}

