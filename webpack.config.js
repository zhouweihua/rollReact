const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV || 'development'
const cssLoaders = [MiniCssExtractPlugin.loader]

module.exports = {
  mode: 'development',
  entry: {
    demoIndex: './demo/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  devtool: false,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'demo/index.html'),
      chunks: ['demoIndex']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // NODE_ENV: JSON.stringify(env),
        prefix: "'myPro'",
      },
    }),
  ]
}
