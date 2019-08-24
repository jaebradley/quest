const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const {
  BASE_DIRECTORY,
  ENTRY_FILE_PATH,
  INDEX_HTML_PAGE_FILE_PATH,
  OUTPUT_DIRECTORY,
  SOURCE_DIRECTORY,
} = require('./constants');


module.exports = {
  entry: ENTRY_FILE_PATH,
  output: {
    filename: 'bundle.js',
    path: OUTPUT_DIRECTORY,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          SOURCE_DIRECTORY,
        ],
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      // mjs needs to be before jsx
      // https://github.com/graphql/graphql-js/issues/1272#issuecomment-377384574
      '.mjs',
      '.js',
      '.jsx',
    ],
    alias: {
      Src: path.resolve(BASE_DIRECTORY, 'src'),
      Actions: path.resolve(BASE_DIRECTORY, 'src/actions'),
      Client: path.resolve(BASE_DIRECTORY, 'src/client'),
      Components: path.resolve(BASE_DIRECTORY, 'src/components'),
      Containers: path.resolve(BASE_DIRECTORY, 'src/containers'),
      Data: path.resolve(BASE_DIRECTORY, 'src/data'),
      GraphQL: path.resolve(BASE_DIRECTORY, 'src/graphql'),
      Sagas: path.resolve(BASE_DIRECTORY, 'src/sagas'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv(),
    new webpack.EnvironmentPlugin([
      'SERVER_BASE_URL',
      'GOOGLE_CLIENT_ID',
      'NODE_ENV',
    ]),
    new HtmlWebpackPlugin({
      inject: false,
      template: INDEX_HTML_PAGE_FILE_PATH,
    }),
  ],
};
