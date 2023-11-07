/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#420464",
        "primary-200": "#7604B5",
        "primary-300": "#580585",
        "primary-400": "#26023A",
        "primary-500": "#0F0116",
        "secondary-100": "#790042",
        "secondary-200": "#D50074",
        "secondary-300": "#A20058",
        "secondary-400": "#460026",
        "secondary-500": "#1B000F",
        "tertiary-100": "#1E0A67",
        "tertiary-200": "#310ABA",
        "tertiary-300": "#280B8A",
        "tertiary-400": "#11053C",
        "tertiary-500": "#070217",
      },
    },
  },
  plugins: [],
};
