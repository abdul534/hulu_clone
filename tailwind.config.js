module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  experimental: {
    esmExternals: false
  },
  theme: {
    extend: {
      screens: {
        "3xl": "2000",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
