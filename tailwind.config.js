const tailwind = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
      mono: 'var(--font-mono)',
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      slate: tailwind.slate,
      gray: tailwind.gray,
      zinc: tailwind.zinc,
      neutral: tailwind.neutral,
      stone: tailwind.stone,
      red: tailwind.red,
      orange: tailwind.orange,
      amber: tailwind.amber,
      yellow: tailwind.yellow,
      lime: tailwind.lime,
      green: tailwind.green,
      emerald: tailwind.emerald,
      teal: tailwind.teal,
      cyan: tailwind.cyan,
      sky: tailwind.sky,
      blue: tailwind.blue,
      indigo: tailwind.indigo,
      violet: tailwind.violet,
      purple: tailwind.purple,
      fuchsia: tailwind.fuchsia,
      pink: tailwind.pink,
      rose: tailwind.rose
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        mono: 'var(--font-mono)',
      },
    },
  },
  plugins: [],
}
