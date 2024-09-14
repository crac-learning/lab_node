export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-main": "#0C0635",
        purple: "#302C55",
        "light-purple": "#251E50",
        "light-font": "#D3F0DA",
        "purple-250": "rgba(25, 19, 65, 0.25)",
        "light-purple-250": "rgba(36, 31, 73, 0.25)",
        "brand-primary": "#9077d2",
        "brand-secondary": "#F6DBA7",
        "brand-tertiary": "#f4b330",
        alert: "#B00020",
        "error-shade": "#CF6679",
        "error-shade-200": "rgba(207, 102, 121, 0.2)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        zoom: {
          "0%": { backgroundSize: "auto 100%" },
          "100%": { backgroundSize: "auto 120%" },
        },
      },
      animation: {
        zoom: "zoom 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
