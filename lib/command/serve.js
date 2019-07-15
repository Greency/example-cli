const execa = require('execa'),
    path = require('path');

module.exports = function () {
    const childProcess = execa('node', path.resolve('../scripts/serve.js'));

    childProcess.stdout.on('data', buffer => {
        process.stdout.write(buffer);
    });
}