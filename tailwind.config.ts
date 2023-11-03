/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'white': '#FFFFFF',
      'gray-dark': '#413E4D',
      'red': '#DD3542',
      'gray-light': '#00000029',
      'gray-light-variant': '#ABB9C780',
      'gray-variant': '#ABB9C7',
      'gray': '#707070'
    },
    extend: {
      fontFamily: {
        "open-sans": ['var(--open-sans)'],
      },
      fontSize:{
        large: "2.5rem"
      },
      boxShadow:{
        '3xl': '0px 0px 16px rgba(0, 0, 0, 0.16)'
      },
      width:{
        '400': '25rem',
        '174': '10.875rem'
      }
    },
  },
  plugins: [
  ],
}
export default config
