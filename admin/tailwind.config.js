//  /** @type {import('tailwindcss').Config} */
//  export default {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {

//       colors:{
//         'primary':"#5F6FF"
//     }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'primary':"#5F6FFF"
    }
    },
  },
  plugins: [],
}
