import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        theme: {
          light: "#d6e2f8",
          dark: "#010732",
        },
        boogie: {
          50: "#b3c5e6",
          100: "#93abd5",
          200: "#5e7cb3",
          300: "#375893",
          400: "#1d3c78",
          500: "#0e2a61",
          600: "#061e50",
          700: "#031844",
          800: "#01133c",
          900: "#011136",
        },
        "boogie-turqoise": {
          50: "#b6ecef",
          100: "#99e3e7",
          200: "#65d3d5",
          300: "#3bc2c3",
          400: "#1cb0b0",
          500: "#089d9d",
          600: "#008789",
          700: "#007074",
          800: "#00585e",
          900: "#004148",
        },
        "boogie-purple": {
          50: "#d2b5ef",
          100: "#c096e5",
          200: "#a160d2",
          300: "#8936bf",
          400: "#7417ac",
          500: "#630498",
          600: "#550084",
          700: "#470070",
          800: "#38005b",
          900: "#2a0047",
        },
        "boogie-green": {
          50: "#cef0bd",
          100: "#b4e9a5",
          200: "#7dd979",
          300: "#54c861",
          400: "#37b750",
          500: "#21a440",
          600: "#138f2e",
          700: "#0a7919",
          800: "#056206",
          900: "#0e4a02",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
