const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // Change to 'production' for production builds
  plugins: [
    new Dotenv({
      systemvars: true, // Ensures system environment variables are used
    }),
  ],
  devtool: 'source-map', // Improves debugging experience
};
