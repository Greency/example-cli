const VueLoaderPlugin = require('vue-loader/lib/plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: 'src/main.js',
    devServer: {
        overlay: true,
        stats: "none"
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
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: '../template/index.html'
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']  //这样配置后，再项目中引入某文件时，可以省略文件后缀
    }
};