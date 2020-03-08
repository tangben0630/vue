const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const common = {
  entry: {
    app: './src/index.js',
    vendor: [
      'lodash'
    ]
    
  },
  output: {
    filename: '[name].[hash:5].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader:'style-loader'
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader" 
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader:'style-loader'
        }, {
          loader: "css-loader"
        }]
      },
      {
        test: /\.vue$/,
        // exclude: /(node_modules|bower_components)/,
        use: 'vue-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {

      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '5555',
      template: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  }
}

module.exports = common