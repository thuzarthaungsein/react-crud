/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D1E7FF",
          200: "#A7CBFF",
          300: "#6EAAFF",
          400: "#348AFF",
          500: "#005BFF",
          600: "#0000FF", // Base Color
          700: "#0000E6",
          800: "#0000B3",
          900: "#000080",
        },
        secondary: {
          100: "#F5F5F5",
          200: "#E0E0E0",
          300: "#BDBDBD",
          400: "#9E9E9E",
          500: "#757575",
          600: "#616161",
          700: "#424242",
          800: "#303030",
          900: "#212121",
        },
        accent: "var(--aw-color-accent)",
        default: "var(--aw-color-text-default)",
        muted: "var(--aw-color-text-muted)",
      },
    },
  },
  plugins: [],
};
