// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/**/*.js"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '810px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'head': ['"Saira Condensed"'],
      'body': ['Inter'],
    },
    extend: {
      fontSize: {
        basemd: '1rem', // Set the base font size to 16 pixels
        base: '0.875rem'
      },},
  },
  plugins: [],
}

