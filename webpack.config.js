var path = require('path');
var webpack = require('webpack');
var ip = require('ip');

// The whitelist key to default value mapping
var envWhitelist = {
  'API_URL': 'http://localhost:9001'
};

module.exports = {
  entry: './app/node-remote',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': Object.keys(envWhitelist).filter(x => envWhitelist.hasOwnProperty(x)).reduce((a, x) => {
        a[x] = JSON.stringify(process.env[x] || envWhitelist[x]);
        console.log('=====================');
        console.log('Setting', x, 'to', a[x]);
        console.log('=====================');
        return a;
      }, {})
    })
  ],
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
