var path = require('path')
var webpack = require('webpack')

var config = {
  devtool: 'source-map',
  entry: [
    './frontend/index.js',
  ],
  output: {
    path: path.join(__dirname, '{{cookiecutter.app_name}}/static/'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
    ]
  }
}

module.exports = config
