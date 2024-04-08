/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      fourK: "2560px",
      laptopL: "1440px",
      laptopM: "1208px",
      laptop: "1024px",
      tablet: "768px",
      tabletS: "524px",
      tabletM: "624px",
      mobileL: "425px",
      mobileM: "375px",
      mobileS: "320px",
      navBreakM: "547px",
    },
    extend: {
      colors: {
        Orange: "#F95555",
      },
    },
  },
  plugins: [],
};
