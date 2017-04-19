var webpack = require('webpack');

module.exports = {

    entry: [
      'webpack/hot/dev-server',
      "./src/js/main.jsx"
    ],
    output: {
      path: __dirname + '/public',
      filename: "bundle.js",
      publicPath: "http://localhost:8000/public"
    },
    module: {
      loaders: [
        { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot','babel-loader']},
        { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot','babel-loader']},
        { test: /\.css$/, loader: 'style!css'}
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
