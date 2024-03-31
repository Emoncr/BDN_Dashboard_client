/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Manrope", "sans-serif"],
    },

    extend: {
      colors: {
        // Light Mode Colors
        bg_primary_white: "#FCFCFC",
        bg_secondary_darkWhite: "#F4F4F4",
        text_primary_black: "#11142D",
        text_secondary_gray: "#808191",

        // Dark Mode Colors
        dark_bg_primary: "#1A1D1F",
        dark_bg_secondary: "#111315",
        dark_text_primary: "#EFEFEF",
        dark_text_secondary: "#6F767E",



        // Text Colors
        text_white: "#FCFCFC",
        text_white_dark: "#EFEFEF",


        // Brand Colors
        brand_primary: "#f60d2b",
        brand_secondary: "#f60d2b",
      },
      borderRadius: {
        10: "10px",
        15: "15px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
