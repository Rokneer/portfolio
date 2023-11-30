/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

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
      contentVisibility: {
        auto: "auto",
        hidden: "hidden",
        visible: "visible",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      animation: {
        shimmer: "shimmer 1.4s infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "content-visibility": (value) => {
            return {
              "content-visibility": value,
            };
          },
        },
        {
          values: theme("contentVisibility"),
        },
      );
      matchUtilities(
        {
          "contain-intrinsic-size": (value) => {
            return {
              "contain-intrinsic-size": value,
            };
          },
        },
        {
          values: theme("containIntrinsicSize"),
        },
      );
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
