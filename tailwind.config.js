module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sdsu-red': {
          light: '#c4374c',
          DEFAULT: '#a6192e',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
