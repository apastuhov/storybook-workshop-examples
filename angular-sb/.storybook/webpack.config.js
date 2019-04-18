module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.stories\.ts?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  console.dir(config.plugins, { depth: null });

  return config;
};

// Merging the loaders from your app’s webpack.config.js with storybook’s

// const path = require('path');
// // your app's webpack.config.js
// const custom = require('../webpack.config.js');
// module.exports = async ({ config, mode }) => {
//   return { ...config, module: { ...config.module, rules: custom.module.rules } };
// };
