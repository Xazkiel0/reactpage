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
        primary: {
          '50': '#f3f6f8',
          '100': '#e0e7ed',
          '200': '#c5d2dc',
          '300': '#9cb1c4',
          '400': '#6c88a4',
          '500': '#516d89',
          '600': '#465b74',
          '700': '#3d4c61',
          '800': '#384352',
          '900': '#262c36',
        },
        // 'primary': {
        //   '50': '#f4f7f9',
        //   '100': '#dce4eb',
        //   '200': '#b8c8d7',
        //   '300': '#8da3bb',
        //   '400': '#657e9c',
        //   '500': '#4b6381',
        //   '600': '#3a4d67',
        //   '700': '#323f53',
        //   '800': '#2b3444',
        //   '900': '#0a0c0f',
        // },
      },
    },
  },
  plugins: [],
}