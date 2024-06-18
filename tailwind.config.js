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
        lightlbue: "#50E2FC",
        darkpurple: "#4B17E6",
        offpurple: " #4B17E60A",
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
        "1xl": "1350px",
      },
    },
  },
  plugins: [],
};
