const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const env = {
  APP_DOMAIN: JSON.stringify(process.env.HOST || 'ws://talking-slack.herokuapp.com')
}

module.exports = {
  mode: 'production',
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'script.js'
  },
  module: {
    rules: [
      { 
        test: /\.pug$/,
        use: 'pug-plain-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      { 
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin(env)
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.join('public')],
    port: 8080,
    sockPort: 80,
    host: "0.0.0.0",
    disableHostCheck: true,
    historyApiFallback: true,
    inline: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 500
  }
}
