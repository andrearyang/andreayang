module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-text': '#628A97',
        'light-light': '#E1EDE1',
        'dark-light': '#09373D',
        'dark-green': '#228C22',
        'bright-green': '#8CD055',
        'green-green': '#C4E376',
        'gray-gray': '#B3B3B3',
        'darker-gray': '#FFFFFF',
        'white-gray': '#aaaaaa',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
