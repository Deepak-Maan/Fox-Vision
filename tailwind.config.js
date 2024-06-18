/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        darkblue: "#071838",
        sky: "#05D5FB",
        purple: "#5925F2",
        lightpurple: "#E6DEFF",
        lightsky: "#E9FCFF",
        darkpurple: "#4B17E6",
        offpurple: " #4B17E60A",
        lightBlue: "#4B17E61A",
        grey: "#B3B3B3",
        lightGrey: "#A6A6A6",
        offGrey: "#D3D3D3",
        extraLightgrey: "#F9F9F9",

      },
      fontSize: {
        " xxsm": "8px",
        "4xxl": "40px",
        "6xxl": "64px",
        "8xxl": "88.41px",
      },
      lineHeight: {
        sm: "107.9%",
        md: "121%",
        "3md": "123%",
        lg: "183%",
      },
      screens: {
        '1xl': '1350px'
      }
    },
  },
  plugins: [],
};
