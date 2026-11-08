import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "500px",
        sm: "600px",
        md: "690px",
        lg: "988px",
        xl: "1078px",
        xxl: "1265px",
      },
      colors: {
        textGray: "#71767B",
        textGrayLight: "#E7E9EA",
        borderGray: "rgba(255, 255, 255, 0.14)",
        inputGray: "#141414",
        surfaceHover: "#141414",
        iconBlue: "#1d9bf0",
        iconGreen: "#00ba7c",
        iconPink: "#f91880",
      },
      fontFamily: {
        chirp: [
          "TwitterChirp",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
