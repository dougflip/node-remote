var path = require('path');

module.exports = {
  entry: './app/node-remote',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  devtool: '#inline-source-map',
  devServer: {
    contentBase: "./app",
    port: 9000
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  externals: [
    {
      "angular": "window.angular"
    }
  ]
};
