const neonTokens = {
  colors: {
    neon: {
      50: '#e6fffb',
      100: '#bffafe',
      200: '#85f7ff',
      300: '#4be9ff',
      400: '#26d4ff',
      500: '#00bff6',
      600: '#0097d1',
      700: '#0a6f9a'
    }
  }
}

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './stories/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      ...neonTokens
    }
  },
  plugins: []
}
