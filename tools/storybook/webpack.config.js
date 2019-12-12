module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /tailwind\.scss$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('tailwindcss')('./tools/tailwind/tailwind.config.js'),
            require('autoprefixer')
          ]
        }
      }
    ]
  });

  return config;
};