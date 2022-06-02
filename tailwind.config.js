const colors = require('tailwindcss/colors'),
  themeColors = {
    black: 'var(--black)',
    white: 'var(--white)'
  }

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '360px', // => @media (min-width: 360px) { ... }
      'sm': '640px', // => @media (min-width: 640px) { ... }
      'md': '768px', // => @media (min-width: 768px) { ... }
      'lg': '1080px', // => @media (min-width: 1080px) { ... }
      'xl': '1440px', // => @media (min-width: 1440px) { ... }
      '2xl': '1600px', // => @media (min-width: 1600px) { ... }
    },
    container: {
      screens: {
        xs: '100%',
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1440px",
      }
    },
    fontSize: {
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '15': '15px',
      '17': '17px',
      '18': '18px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '23': '23px',
      '24': '24px',
      '25': '25px',
      '30': '30px',
      '36': '36px',
      '40': '40px',
      '50': '50px',
      '60': '60px',
    },
    lineHeight: {
      'none': '1',
      '25': '25pt',
      '30': '30px',
      '35': '35px',
      '60': '60px',
      '64': '64px'
    },
    letterSpacing: {
      '5': '.05em',
      '10': '.01em',
      '15': '.015em',
      '20': '.02em',
      '25': '.025em'
    },
    colors: themeColors,
    textColor: themeColors,
    backgroundColor: themeColors,
    borderColor: themeColors,
    borderOpacity: {
      '5': '0.05',
      '10': '0.1',
      '50': '0.5',
      '95': '0.95',
    },
    prefix: '',
    fontFamily: {
      sans: ['Makro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      secondary: ['Acumin', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']
    },
    extend: {
      spacing: {
        '10': '10px',
        '16': '16px',
        '20': '20px',
        '22': '22px',
        '23': '23px',
        '24': '24px',
        '25': '25px',
        '30': '30px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '64': '64px',
        '68': '68px',
        '80': '80px'
      },
    }
  },
  corePlugins: {
    ringWidth: false,
    textOpacity: false,
    shadow: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  },
}
