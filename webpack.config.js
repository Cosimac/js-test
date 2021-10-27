/*
 * @Date: 2021-10-20 16:29:42
 * @LastEditors: Cosima
 * @LastEditTime: 2021-10-27 18:16:51
 * @FilePath: /js-test/webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    clean: true,
    library: {
      name: 'webpackNumbers',
      type: 'umd'
    }
  },
  // optimization: {
  //   moduleIds: 'deterministic',
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'js-code'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true
  },
  resolve: {
    extensions: [".js"],
    alias: {
      '@': resolve('./src')
    }
  },
};