const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    context: process.cwd(),
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']  //在引入文件或模块时，可以不用写文件后缀
    }
};