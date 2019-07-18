const HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path'),
    fs = require('fs'),
    merge = require('webpack-merge'),
    commonConfig = require('./common');

module.exports = function (type) {
    let config = {
        mode: 'production',
        entry: path.resolve('src/main.js'),
        output: {
            path: path.resolve('dist'),
            filename: 'js/main.js'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
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
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin("css/main.css")  //将每个组件中的css全部打包成一个css文件
        ]
    };

    if (type === 'application') {
        config.plugins.push(new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../template/index.html') }));
    } else {
        config.output = {
            path: path.resolve('lib'),
            libraryTarget: 'commonjs2'
        };

        if (type === 'entireLibrary') {
            config.entry = path.resolve('packages/index.js');
            config.output.filename = 'index.js';
        } else if (type === 'eachLibrary') {
            /**
             * 约定一下：
             * 组件库打包的时候，需要在项目的根目录下新建一个components.json文件，
             * 此文件就是每个组件的相对路径，
             * 格式为： "component name": "component url"
             */
            let componentsJsonDir = path.resolve(process.cwd(), 'components.json');

            if (fs.existsSync(componentsJsonDir)) {
                let componentsPath = require(componentsJsonDir);

                config.entry = componentsPath;
                config.output.filename = '[name].js';
                config.module = {
                    rules: [
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
                };
                config.plugins = [new MiniCssExtractPlugin({ filename: 'theme-chalk/[name].css' })];
            } else {
                console.log('未在当前目录下找到 components.json 文件，打包失败！');
            }
        }
    }


    return merge(commonConfig, config);
}