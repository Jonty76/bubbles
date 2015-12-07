var webpack = require('webpack');

module.exports = {

    entry: [
      'webpack/hot/dev-server',
      "./src/js/main.js"
    ],
    output: {
      path: __dirname + '/public',
      filename: "bundle.js",
      publicPath: "/public/"
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot','babel']},
        { test: /\.css$/, loader: 'style!css'}
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
