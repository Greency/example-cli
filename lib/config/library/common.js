const merge = require('webpack-merge'),
    common = require('../common');

module.exports = function (){
    return merge(common, {
        externals: /^(vue|\$)$/i  //防止将vue也打包进来
    });
}