/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '4cl': 'repeat(auto-fit, minmax(250px, 1fr))',
        '2cl': 'repeat(auto-fit, minmax(170px, 1fr))',
      },
      colors:{
        'cl-primary' : '#fa3e17',
        'cl-primaryDark' : '#d2391a',
        'cl-primaryLigth' : '#ffeee8',
        'cl-btn-black': '#3a281c'
      }
    },
  },
  plugins: [],
}
