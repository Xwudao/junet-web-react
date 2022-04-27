module.exports = {
  content: ['./src/**/*.{tsx,ts,js}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#e67e22',
        dark: '#232429',
      },
      width: {
        100: '25rem',
        200: '50rem',
      },
      screens: {
        // mobile: '390px',
        tablet: '640px',
        // => @media (min-width: 640px) { ... }
        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }
        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
