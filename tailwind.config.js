/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      colors: {
        "primary": "#384687",
        "success": "#014847",
        "danger": "#EE5D50",
        "dark": "#1D2329",
        "secondary": "#F6FDFF",
        'border_color': '#F6FAFF'
      },
      fontSize: {
        xs: '12.5px',
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}