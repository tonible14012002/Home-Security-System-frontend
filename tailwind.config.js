/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
<<<<<<< HEAD
=======
      colors: {
        mainCream: '#F8EDE3',
        mainPurple: '#7D6E83',
        mainRed: '#F96666',
        mainBlue: '#7895B2',
        mainBrown: '#D0B8A8',
      },
>>>>>>> 8b9182d5e12c5a2d0f836a07e68d6eff1dce1f6e
    },
  },
  plugins: [],
};
