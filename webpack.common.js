let VueLoaderPlugin = require('vue-loader/lib/plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let path = require('path');

module.exports = {
  entry : './src/main.js',
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
      {
        test: /\.(png|jp(e*)g|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    //new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public/index.html')}),
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      },
      {
        from: 'public',
        to: '.'
      }
    ])
  ]
};