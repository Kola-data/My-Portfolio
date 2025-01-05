import { width } from '@fortawesome/free-regular-svg-icons/faAddressBook';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Ubuntu:["Ubuntu Sans"],
      },
    },
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth : "thin",
          scrollbarColor : "rgb(59 130 246) white"
        },
        ".scrollbar-webkit" : {
          "&::-webkit-scrollbar" : {
            width: "8px"
          },
          "&::-webkit-scrollbar-track": {
            background : "white"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor : "rgb(37 99 235)",
            borderRadius : "20px",
            border : "1px solid white"
          }
        }
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
};
