const path = require('path');

module.exports = {
  entry: {
    app: ['./app/test-layout.js']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './app'),
    publicPath: '/build'
  },
  module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
}
