var webpack = require('webpack');

module.exports = {

    entry: [
      "./src/js/main.jsx"
    ],
    output: {
      path: __dirname + '/public',
      filename: "bundle.js",
    },
    module: {
      loaders: [
        { test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader']},
        { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
        { test: /\.css$/, loader: 'style!css'},
        { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=public/ozregular.otf'}
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
