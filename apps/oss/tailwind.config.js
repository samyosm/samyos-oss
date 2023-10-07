const colors = require('tailwindcss/colors');

const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
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
    require('@tailwindcss/typography'),
  ],
};
