// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fancy: ['"M PLUS Rounded 1c"', "sans-serif"],
      },
      fontSize: {
        smaller: "0.875rem", // Custom font size for smaller text
        tiny: "0.75rem", // Even smaller font size if needed
      },
    },
  },
  plugins: [],
};
