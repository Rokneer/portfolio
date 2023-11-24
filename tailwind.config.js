/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#7604B5",
        "primary-200": "#580585",
        "primary-300": "#420464",
        "primary-400": "#26023A",
        "primary-500": "#0F0116",
        "secondary-100": "#D50074",
        "secondary-200": "#A20058",
        "secondary-300": "#790042",
        "secondary-400": "#460026",
        "secondary-500": "#1B000F",
        "tertiary-100": "#310ABA",
        "tertiary-200": "#280B8A",
        "tertiary-300": "#1E0A67",
        "tertiary-400": "#11053C",
        "tertiary-500": "#070217",
      },
      screens: {
        xs: "475px",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
