/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack');

const nextConfig = {
  poweredByHeader: false,
  pageExtensions: ['ts', 'tsx'],
  reactStrictMode: false,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'rickandmortyapi.com' }]
  },
  webpack: (config) => {
    const newConfig = { ...config };

    newConfig.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    // DEV PLUGINS
    if (process.env.NODE_ENV === 'development') {
      newConfig.plugins.push(
        new webpack.ProvidePlugin({
          log: `${__dirname}/plugins/logger.js`
        })
      );
    }

    return newConfig;
  }
};

module.exports = nextConfig;
