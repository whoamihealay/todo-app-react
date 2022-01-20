module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    fontSize: {
      xs: "clamp(0.78rem, 0.81rem + -0.12vw, 0.72rem)",
      sm: "clamp(0.94rem, 0.95rem + -0.07vw, 0.90rem)",
      base: "clamp(1.13rem, 1.13rem + 0.00vw, 1.13rem)",
      lg: "clamp(1.35rem, 1.33rem + 0.11vw, 1.41rem)",
      xl: "clamp(1.62rem, 1.57rem + 0.27vw, 1.76rem)",
      "2xl": "clamp(1.94rem, 1.84rem + 0.50vw, 2.20rem)",
      "3xl": "clamp(2.33rem, 2.17rem + 0.81vw, 2.75rem)",
      "4xl": "clamp(2.80rem, 2.55rem + 1.24vw, 3.43rem)",
    },
    extend: {
      backgroundImage: {
        "mobile-light": "url('/src/assets/bg-mobile-light.jpg')",
        "mobile-dark": "url('/src/assets/bg-mobile-dark.jpg')",
        "desktop-light": "url('/src/assets/bg-desktop-light.jpg')",
        "desktop-dark": "url('/src/assets/bg-desktop-dark.jpg')",
        rainbow:
          "linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/forms"),
  ],
};
