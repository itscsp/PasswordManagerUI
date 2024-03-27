/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: '10px',
          paddingRight: '10px',
          margin: '0 auto',

          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "680px",
          },
          "@screen lg": {
            maxWidth: "680px",
          },
          "@screen xl": {
            maxWidth: "680px",
          },
        },
      });
    },
  ],
}