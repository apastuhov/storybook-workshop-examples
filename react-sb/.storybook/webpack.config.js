module.exports = async ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
            },
            // Optional
            {
                loader: require.resolve('react-docgen-typescript-loader'),
            },
        ],
    });
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
        test: /\.stories\.(ts|tsx)?$/,
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
