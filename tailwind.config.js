module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cyan': {
          DEFAULT: '#00bcd4',
          '50': '#e0f7fa',
          '100': '#b2ebf2',
          '200': '#80deea',
          '300': '#4dd0e1',
          '400': '#26c6da',
          '500': '#00bcd4',
          '600': '#00acc1',
          '700': '#0097a7',
        }
      },
      zIndex: {
        '100': '100',
      },
      margin: {
        '-18': '-4.5rem',
        '54': '13.8rem',
      },
      height: {
        '18': '4.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
