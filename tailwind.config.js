/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": {
          DEFAULT: "#ADADAD",
          100: "#F3F3F3",
          200: "#253D4E",
        },
        primary: {
          DEFAULT: "#509E2F",
        },
      },
      backgroundImage: {
        banner: "url('/images/banner.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
