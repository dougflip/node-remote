const DefinePlugin = require('webpack').DefinePlugin;
const path = require('path');
const ip = require('ip');

// allow overriding the api url via an npm config var
//  otherwise just default to the current ip at port 9001
const apiUrl = process.env.npm_package_config_apiUrl || `http://${ip.address()}:9001`;

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw'},
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new DefinePlugin({ API_URL: JSON.stringify(apiUrl) })
  ]
};
