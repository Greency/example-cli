const execWebpack = require('./execWebpack'),
    getConfig = require('../config/build');

execWebpack(getConfig('application'));