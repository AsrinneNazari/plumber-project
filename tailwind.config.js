/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        darkblue: "#1f9eff",
      },
      borderColor: {
        borderlightgray: "#d3dce6",
      },
      fontFamily: {
        sans: ["sans-serif"],
        serif: ["serif"],
      },
    },
  },
  plugins: [],
};
