const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './',
  output: {
  	filename: '[name].build.js?hash=[hash]',
  	path: path.resolve(__dirname)
  },
  module: {
  	rules: [
  		{
  			test: /\.js$/,
  			exclude: /node_modules/,
  			loader: 'babel-loader'
  		}
  	]
  }
}