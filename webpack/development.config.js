const merge = require('webpack-merge');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const WebpackBuildNotifier = require('webpack-build-notifier');
const {
  BundleAnalyzerPlugin,
} = require('webpack-bundle-analyzer');
const dotenv = require('dotenv');

const common = require('./base.config');

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

module.exports = merge.smart(
  common,
  {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      new WebpackBuildNotifier({
        title: 'Quest Build',
      }),
      new HardSourceWebpackPlugin(),
    ],
    watch: true,
  },
);
