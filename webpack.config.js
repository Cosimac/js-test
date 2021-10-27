/*
 * @Date: 2021-10-20 16:29:42
 * @LastEditors: Cosima
 * @LastEditTime: 2021-10-27 15:24:24
 * @FilePath: /js-test/webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    extensions: [".js"],
    alias: {
      '@': resolve('./src')
    }
  },
};