const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // Main JavaScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the dist folder before each build
  },
  mode: 'development', // Change to 'production' for production builds
  devtool: 'source-map', // Improves debugging experience
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extracts and loads CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Uses your custom HTML file
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // Outputs extracted CSS as [name].css
    }),
  ],
  devServer: {
    static: './dist', // Serves files from the dist folder
    hot: true, // Enables Hot Module Replacement
  },
};
