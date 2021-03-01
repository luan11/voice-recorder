module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
        mono: ['Roboto Mono', 'monospace']
      },
      colors: {
        'bg': {
          DEFAULT: '#FAFAFA',
          dark: '#2a2a2a'
        },
        'text': '#424242',
        'button-green': '#2DE38C',
        'button-red': '#EA4848'
      },
      borderRadius: {
        'custom': '10px'
      },
      boxShadow: {
        inner: 'inset 0px 0px 6px rgba(66, 66, 66, 0.2)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
