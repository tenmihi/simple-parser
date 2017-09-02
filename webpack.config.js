const path = require('path');

module.exports = {
  entry: 'parser.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: "index.js",
  },
  resolve: {
    modules: [ path.resolve(__dirname, './src/js') ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  },
}
