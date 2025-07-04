import { type Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
      },
      colors: {
        accent: '#FF5722',
      },
    },
  },
} satisfies Config