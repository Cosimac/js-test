/*
 * @Date: 2021-10-20 16:29:42
 * @LastEditors: Cosima
 * @LastEditTime: 2021-10-20 17:31:10
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
      title: 'test5'
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