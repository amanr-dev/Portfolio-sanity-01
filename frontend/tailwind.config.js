// import image from "./src"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  darkMode: false,
  theme: {
    extend: {
      textColor: {
        primaryWhiteColor: "#edf2f8",
        blueColor: "#141e8d",
        blackColor: "#030303",
        lightGrayColor: "#e4e4e4",
        grayColor: "#6b7688",
        brownColor: "#472222",
        whiteColor: "#ffffff",
      },
      backgroundColor: {
        primaryWhiteColor: "#edf2f8",
        blueColor: "#141e8d",
        blackColor: "#030303",
        lightGrayColor: "#e4e4e4",
        grayColor: "#6b7688",
        brownColor: "#472222",
        whiteColor: "#ffffff",
      },
      screens: {
        mobile: "450px",
        tab: "750px",

        desktop: "1250px",
      },
      backgroundImage: {
        menuWhitePng: "url('/src/assets/bgWhite.png')",
        bgImg: "url('/src/assets/bgIMG.png')",
      },
    },
  },
  plugins: [],
};
