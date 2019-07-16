const VueLoaderPlugin = require('vue-loader/lib/plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    path = require('path'),
    fs = require('fs');

/**
 * 约定一下：
 * 组件库打包的时候，需要在项目的根目录下新建一个components.json文件，
 * 此文件就是每个组件的相对路径，
 * 格式未： "component name": "component url"
 */
let componentsJsonDir = path.resolve(process.cwd(), 'components.json'),
    components = {};

if (fs.existsSync(componentsJsonDir)) {
    components = require(componentsJsonDir);
} else {
    console.log('未在当前目录下找到 components.json 文件，打包失败！');
}

module.exports = {
    mode: 'production',
    entry: components,
    output: {
        path: path.resolve('lib'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'  //决定打包后的模式
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
                    MiniCssExtractPlugin.loader,  //用于将每个组件的css文件独立出来
                    'css-loader'
                ]
            },
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
        new MiniCssExtractPlugin({  //用于将每个组件的css文件独立出来
            filename: 'theme-chalk/[name].css'
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']  //在引入文件或模块时，可以不用写文件后缀
    },
    externals: /^(vue|\$)$/i  //防止将vue也打包
};