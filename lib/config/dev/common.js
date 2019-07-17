const path = require('path'),
    merge = require('webpack-merge'),
    common = require('../common');

module.exports = function (dir) {
    return merge(common, {
         //需要resolve一下，不然会报错
        entry: path.resolve('src/main.js'),
        output: {
            path: path.resolve(`${dir}`),
            filename: 'js/main.js'
        }
    });
}