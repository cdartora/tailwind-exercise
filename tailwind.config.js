/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0% 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
      },
      // animation-wavey
      animation: {
        wavey: "wavey 1s linear infinite",
      },
    },
  },
  plugins: [
    require("./plugins/animationDelay"),
    require("./plugins/tableCaption"),
  ],
};
