// 引入一个包
const path = require('path');
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HTMLWebpackPlugin = require('html-webpack-plugin')

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {

    entry: './src/index.ts',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
      rules: [
          {
              test: /\.ts$/,
              use: 'ts-loader',
              exclude: /node_modules/
          }
      ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // 设置html的title
            //title: 'Title1',
            // 设置html模板
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    },

    mode: 'production'

}
