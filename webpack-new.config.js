const DefinePlugin = require('webpack').DefinePlugin;
const path = require('path');

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
    new DefinePlugin({
      API_URL: JSON.stringify(process.env.npm_package_config_apiUrl)
    })
  ]
};
