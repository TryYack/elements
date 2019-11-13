const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'elements.js',
    library: 'elements'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json'
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(tsx|ts)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {
              tsConfigFile: 'tsconfig.json'
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "file-loader",
            options: {
                name: "elements.[ext]",
            },
           },
           "extract-loader",
           {
             loader: "css-loader",
             options: {
               sourceMap: true,
             }
           },
        ],
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
};
