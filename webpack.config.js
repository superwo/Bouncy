const path = require('path');
module.exports = {
  entry: {
    App: './app/js/scripts/App.js',
    Vendor: './app/js/scripts/Vendor.js'
  },
  output: {
    path: path.resolve(__dirname, 'app/js'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      },
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
}
