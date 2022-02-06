// 引入一个包
const path = require('path');
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {

    // 指定入口文件
    entry: './src/index.ts',

    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的文件
        filename: 'bundle.js',
        environment: {
            // 告诉webpack不使用箭头，如果在IE中运行，这个需要设置为false，因为所有版本IE都不支持箭头函数
            arrowFunction: false
        }
    },

    // 指定webpack打包时要使用模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 配置babel
                    // 如果要对loader进行配置，可以使用对象的方式
                    {
                        // 指定加载器
                        loader:"babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets:[
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets:{
                                            "chrome":"58",
                                            "ie":"11"
                                        },
                                        // 指定corejs的版本
                                        "corejs":"3",
                                        // 使用corejs的方式 "usage" 表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    // 如果不对loader进行配置，直接写字符串即可
                    // 处理ts的webpack插件
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node_modules/
            }
        ]
    },

    // 配置Webpack插件
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
