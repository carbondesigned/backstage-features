module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1720px",
        "4xl": "1920px",
        "5xl": "2560px",
        "6xl": "2880px",
        "7xl": "3280px",
        "8xl": "3840px",
        "9xl": "4080px",
        "10xl": "5600px",
      },
      fontSize: {
        "8xl": "6rem",
      },
      animation: {
        "indicator-bounce": "indicator-bounce 0.5s ease-in-out",
        "slide-up": "slide-up 5s ease-in-out",
        "nav-fade": "nav-fade 200ms ease",
        "nav-links-slide": "nav-links-slide 200ms ease",
      },
      keyframes: {
        "nav-fade": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "nav-links-slide": {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
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
