/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        darkblue: "#1f9eff",
        linkblue: "#0f0f6f",
      },
      fontFamily: {
        sans: ["sans-serif"],
        roboto: ["roboto"],
        fjalla: ["Fjalla One"]
      },
    },
  },
  plugins: [],
};
