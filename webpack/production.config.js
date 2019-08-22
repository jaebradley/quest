const webpack = require('webpack');
const merge = require('webpack-merge');
// const {
//   BundleAnalyzerPlugin,
// } = require('webpack-bundle-analyzer');

const common = require('./base.config');

module.exports = merge.smart(
  common,
  {
    mode: 'production',
    devtool: 'source-map',
  },
);
