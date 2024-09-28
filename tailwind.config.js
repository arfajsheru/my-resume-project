/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        opansans: ["Open Sans", "sans-serif"],  // sans-serif ko string me daalo
        playfair: ["Playfair Display SC", "sans-serif"], // yahan bhi same
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}