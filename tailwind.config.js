/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        card: {
          dark: "#363636",
          light: "#fefefe",
        },

        "body-bg": {
          dark: "#191919",
          light: "#ffffff",
        },

        heading: {
          dark: "#cccccc",
          light: "#42446e",
        },
        content: {
          dark: "#a7a7a7",
          light: "#666666",
        },

        hero: {
          dark: "#cccccc",
          light: "#d9d9d9",
        },
        "form-stroke": "#9DA0AA",
        submit: {
          none: "#7EC786",
          hover: "#71b379",
        },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rowdies: ["Rowdies", "cursive"],
      },

      height: {
        62: "15.5rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
      },
      width: {
        22: "5.5rem",
        62: "15.5rem",
        76: "19rem",
        90: "22.5rem",
        94: "23.5rem",
        100: "25rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
      },
      text: {
        md: "1rem", // Customize the font size as needed
      },
      spacing: {
        50: "12.5rem",
        54: "13.5rem",
      },

      boxShadow: {
        "3xl":
          "0 35px 60px -15px rgba(0, 0, 0, 0.3), 0 25px 25px -15px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  extend: {},
  plugins: [],
};
