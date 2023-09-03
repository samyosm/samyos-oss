const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        neutral: colors.slate,
        success: colors.emerald,
        danger: colors.red,
        other: colors.blue,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
