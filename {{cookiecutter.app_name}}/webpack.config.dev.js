var path = require('path')
var webpack = require('webpack')

var config = {
  devtool: 'cheap-module-source-map',
  entry: [
    './frontend/index.js',
  ],
  output: {
    path: path.join(__dirname, '{{cookiecutter.app_name}}/static/'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
    ]
  }
}

module.exports = config
