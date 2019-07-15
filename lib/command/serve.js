const execa = require('execa'),
    path = require('path');

module.exports = function () {
    let execaDir = path.resolve(__dirname, '../scripts/serve.js');
    const childProcess = execa('node', [execaDir]);

    childProcess.stdout.on('data', buffer => {
        process.stdout.write(buffer);
    });
}