var tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-nested'),
      require('postcss-preset-env')({
        stage: 1,
      }),
      require('postcss-flexbugs-fixes'),
      tailwindcss('../tailwind/tailwind.config.js'),
      require('autoprefixer'),
    ],
  };