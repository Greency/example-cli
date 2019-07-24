const path = require('path'),
    execWebpack = require('./execWebpack'),
    getConfig = require('../config/build'),
    removeDir = require('../utils/removeDIr');

removeDir(path.resolve(process.cwd(), 'lib'), () => {
    execWebpack(getConfig('application'));
});