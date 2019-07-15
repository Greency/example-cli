const path = require('path'),
    VueLoaderPlugin = require('vue-loader/lib/plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    context: process.cwd(),
    //需要resolve一下，不然会报错
    entry: path.resolve('src/main.js'),
    output: {
        path: path.resolve('dist'),
        filename: 'js/main.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
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
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            //这里由于命令的目录和模板的目录不在一起，所以需要采用绝对路径
            template: path.resolve(__dirname, '../template/index.html')
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']  //这样配置后，再项目中引入某文件时，可以省略文件后缀
    }
};