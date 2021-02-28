module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg': '#FAFAFA',
        'text': '#424242', 
        'button-green': '#2DE38C',
        'button-red': '#EA4848'
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
      mono: ['Roboto Mono', 'monospace']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
