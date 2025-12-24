// module.exports = {
//   purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };


// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-red': '#fb2c36',
      },
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}