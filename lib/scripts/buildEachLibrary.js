console.log('each');
const execWebpack = require('./execWebpack'),
    getConfig = require('../config/build');
console.log('eacc');
    console.log(getConfig('eachLibrary'));
execWebpack(getConfig('eachLibrary'));