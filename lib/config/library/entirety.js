const VueLoaderPlugin = require('vue-loader/lib/plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve('packages/index.js'),
    output: {
        path: path.resolve('lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({  //将每个组件中的css全部打包成一个css文件
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.styl(us)?$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'stylus-loader']
                })
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextPlugin("theme-chalk/base.css")  //将每个组件中的css全部打包成一个css文件
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    externals: /^(vue|\$)$/i  //防止将vue也打包进来
};