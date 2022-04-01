module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
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
