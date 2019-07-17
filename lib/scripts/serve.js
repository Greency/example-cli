const webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server');

let serverConfig = require('../config/dev/server');
const compiler = webpack(serverConfig);

new WebpackDevServer(compiler, serverConfig.devServer).listen('8080', '127.0.0.1', () => {
    console.log('Listening at http://127.0.0.1:8080');
});