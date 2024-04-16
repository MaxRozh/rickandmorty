const { COLORS } = require('./src/constants/colors');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg',
    'bg-opacity-50',
    'dark:bg-opacity-80'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: COLORS,
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif']
      },
      transitionDuration: {
        DEFAULT: '266ms'
      },
      transitionProperty: {
        width: 'width'
      },
      textDecoration: ['active'],
      minWidth: {
        kanban: '28rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
};
