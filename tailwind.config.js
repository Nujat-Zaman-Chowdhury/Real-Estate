/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         roboto:["Roboto", "sans-serif"],
//         playFair:["Playfair Display", "serif"],
//     },
//   },
//   plugins: [require("daisyui")],
// }
// }
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
      fontFamily: {
                roboto:["Roboto", "sans-serif"],
                playFair:["Playfair Display", "serif"],
                eb:["EB Garamond", "serif"]
      }
    },
  },
  plugins: [require("daisyui")],
});