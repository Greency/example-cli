const execWebapckDevServer = require('./execWebpackDevServer'),
    getConfig = require('../config/server');

execWebapckDevServer(getConfig('library'));