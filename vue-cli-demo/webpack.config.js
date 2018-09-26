var path = require('path')
var webpack = require('webpack')

/* webpack:
    前端自动化构建工具;
    遵循CommonJS规范;
手动配置webpack过程:
    1.入口文件设置;
    2.出口文件配置;
    3.加载器使用;
    4.外部插件管理 */

module.exports = {
    entry: './src/main.js', //项目入口文件
    output: { //出口文件
        path: path.resolve(__dirname, './dist'), //出口路径 打包文件放哪一个目录，必须是绝对目录
        publicPath: '/dist/', //出口路径, 针对npm run dev
        filename: 'build.js' //打包之后生成文件名
    },
    module: { // 模块 --  加载器规则定义
        rules: [{ // 规则
                test: /\.css$/,
                use: [
                    'vue-style-loader', //加载器对指定文件进行转化操作, 顺序>>从右向左执行
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader', //转化为行内样式
                    'css-loader', //再将css进行转化
                    'sass-loader?indentedSyntax' //先将sass进行转化
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

//process 进程
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([ //插件管理
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}