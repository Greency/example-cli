const webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server');

module.exports = function (config) {
    const compiler = webpack(config);
    
    new WebpackDevServer(compiler, config.devServer).listen('8080', '127.0.0.1', () => {
        console.log('Listening at http://127.0.0.1:8080');
    });
};