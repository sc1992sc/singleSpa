/* eslint-env node */
const webpack = require('webpack')
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/people.js'),
  output: {
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[id].[chunkhash].js',
    library: 'people',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, '../../product/public/program3'),
  },
  mode: 'production',
  module: {
    rules: [
      {parser: {System: false}},
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'node_modules'), /\.krem.css$/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require('autoprefixer')
                ];
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'node_modules')],
        exclude: [/\.krem.css$/],
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.krem.css$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'kremling-loader',
            options: {
              namespace: 'people',
              postcss: {
                plugins: {
                  'autoprefixer': {}
                }
              }
            },
          },
        ]
      },
    ],
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['build/people']),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../../product/public/program3/index.html'),
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // new CopyWebpackPlugin([
    //   {from: path.resolve(__dirname, 'src/people.js')}
    // ]),
  ],
  devtool: 'cheap-module-eval-source-map',
  // externals: [
  //   /^@portal\/*/,
  //   /^lodash$/,
  //   /^single-spa$/,
  //   /^rxjs\/?.*$/,
  //   /^react$/,
  //   /^react\/lib.*/,
  //   /^react-dom$/,
  //   /.*react-dom.*/,
  // ],
};

