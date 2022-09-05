/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
      backgroundColor: {

      },
      textColor: {
        secondary: {
          "50": "#61a2ff",
          "100": "#5798ff",
          "200": "#4d8efc",
          "300": "#4384f2",
          "400": "#397ae8",
          "500": "#2f70de",
          "600": "#2566d4",
          "700": "#1b5cca",
          "800": "#1152c0",
          "900": "#0748b6"
        }
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        1: {
          '50': '#E1E1F7',
          '100': '#e2e3e5',
          '200': '#c5c6ca',
          '300': '#a0a0a8',
          '400': '#7c7c85',
          '500': '#62626a',
          '600': '#4d4e54',
          '700': '#404045',
          '800': '#1E2023',
          '900': '#171818',
        },
        'd': {
          '50': '#f6f6f7',
          '100': '#e2e3e5',
          '200': '#c5c6ca',
          '300': '#a0a0a8',
          '400': '#7c7c85',
          '500': '#61616b',
          '600': '#4d4d54',
          '700': '#3f4046',
          '800': '#282b2f',
          '900': '#1b1b1d',
        },
        2: {
          "50": "#61a2ff",
          "100": "#5798ff",
          "200": "#4d8efc",
          "300": "#4384f2",
          "400": "#397ae8",
          "500": "#2f70de",
          "600": "#2566d4",
          "700": "#1b5cca",
          "800": "#1152c0",
          "900": "#0748b6"
        },
      },
    },
  },
  plugins: [],
}