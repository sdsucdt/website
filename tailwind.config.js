module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,js}'],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sdsu-red': '#a6192e',
        'sdsu-light-red': '#c4374c',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
