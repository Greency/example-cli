const MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    merge = require('webpack-merge'),
    commonConfig = require('./common');

module.exports = function (type) {
    let entry = type === 'application' ? 'src/main.js' : 'example/main.js';

    return merge(commonConfig, {
        mode: 'development',
        devtool: 'source-map',
        entry: path.resolve(entry),
        output: {
            path: path.resolve('public'),
            filename: 'js/main.js'
        },
        devServer: {
            overlay: true,
            stats: "none",
            writeToDisk: true,
            contentBase: path.resolve(process.cwd(), 'public')
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                /**
                 * 我们可以把常用的css预编译器都先在这里声明，
                 * 这样做的话，当用户使用了其他的预编译时，
                 * 只需要安装就行，不需要再配置rules。
                 * 可以大大的方便用户。
                 */
                {
                    test: /\.styl(us)?$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'stylus-loader'
                    ]
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].css'
            }),
            new HtmlWebpackPlugin({
                //这里由于命令的目录和模板的目录不在一起，所以需要采用绝对路径
                template: path.resolve(__dirname, '../template/index.html')
            })
        ]
    });
}