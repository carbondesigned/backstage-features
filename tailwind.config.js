module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "indicator-bounce": "indicator-bounce 0.5s ease-in-out",
        "slide-up": "slide-up 5s ease-in-out",
      },
      keyframes: {
        "indicator-bounce": {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(10px)",
          },

          "100%": {
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(500px) translateX(50%)",
          },
          "15%": {
            transform: "translateY(-200px) translateX(50%)",
            transform: "translateX(50%)",
          },
          "90%": {
            transform: "translateY(-200px) translateX(50%)",
            transform: "translateX(50%)",
          },
          "100%": {
            transform: "translateY(500px) translateX(50%)",
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        theme: {
          primary: "#7000FF",
          secondary: "#00C6BA",
          accent: "#e5a387",
          neutral: "#070707",
          "neutral-content": "#AEADAD",
          "base-100": "#FFFDFD",
          "base-200": "#242324",
          "base-300": "#1D1D1D",
          info: "#97C9F7",
          success: "#23CE6B",
          warning: "#F7A350",
          error: "#FF2C55",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
