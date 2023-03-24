const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  theme: {
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
    screens: {
      'xs': '361px',
      'mobile': '480px',
      // => @media (max-width: 480px) { ... }
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary-color': '#0fa',
        'bg-color': '#0A0D0E',
        'custom-grey': '#dbdbdb',
        'svg-color': '#666868',
        'sec-color-1': '#f5b03e',
        'sec-color-2': '#f53ec2'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      opacity: {
        '60': '.60',
      },
      fontFamily: {
        'Satoshi': ['Satoshi', 'sans-serif'],
        'Gradual': ['Gradual', 'serif'] // Ensure fonts with spaces have " " surrounding it.
      }
    },
  },
  plugins: [require('tailwindcss-text-fill-stroke'),],
}
