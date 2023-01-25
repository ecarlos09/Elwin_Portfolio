const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIRECTORY = path.join(__dirname, '../'); // This is my root directory for the project
const PUBLIC_DIRECTORY = path.join(ROOT_DIRECTORY, 'public'); // This is where my index.html lives

const config = {
  entry: [path.resolve(ROOT_DIRECTORY, 'src/index.js')], // This is where my main JavaScript file lives
  output: {
    // instructions for compiling the code
    path: path.resolve(ROOT_DIRECTORY, 'build'), // the file where I want compiled code to go
    filename: 'bundle.js', // Compiled code will be bundled into a file called bundle.js
    publicPath: '/', // This is the base path for all publicly available assets
  },
  mode: 'development', // tells webpack to use its built-in optimisations according to the mode
  resolve: {
    // instructions on how to resolve modules
    modules: [path.resolve('node_modules'), 'node_modules'], // tells webpack where to look for node_modules
  },
  performance: {
    // notifies me if assets and entry points exceed a specific file limit - I don't want this yet
    hints: false,
  },
  plugins: [
    // plugins we are using to help with compiling
    new HtmlWebpackPlugin({
      // used to add the JavaScript code to the HTML
      template: path.join(PUBLIC_DIRECTORY, 'index.html'),
    }),
  ],
  module: {
    // helpers we want webpack to use
    rules: [
      // specific instructions for each helper
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }, // transpile JavaScript files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, // transpile css files and images
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ['file-loader'],
      }, // transpile image files
    ],
  },
};

module.exports = config;