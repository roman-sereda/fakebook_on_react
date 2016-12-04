var path = require('path');
var webpack = require('webpack');
require("css!./stylesheet.css");

module.exports = {
  entry: './src/app.js',
  output: {
    publicPath: "/assets/",
    path: __dirname + '/../app/assets/javascripts',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'react' ] }
      }
    ]
  }
};
