/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        focus: "#fafafa",
        normal: "#e5e5e5",
        muted: "#a3a3a3",
      },
      borderRadius: {
        outer: "0.65rem",
        inner: "0.4rem",
        item: "0.15rem",
      },
      spacing: {
        page: "12rem",
        component: "1.2rem",
        item: "0.5rem",
        sm: "1rem",
        md: "16rem",
        lg: "32rem",
      },
      colors: {
        primary: "#67e8f9",
        secondary: "#cffafe",
        danger: "#be185d",
        accent: "#a7f3d00",
        error: "#fef08a",
        success: "#a3e635",
        base: {
          100: "#0a0a0a",
          200: "#171717",
          300: "#262626",
          content: "#737373",
        },
      },
    },
  },
  plugins: [],
};
