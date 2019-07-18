const execa = require('execa'),
    path = require('path');

module.exports = function (projectName) {
    /**
     * 当前的命令z执行的目录在<projectName>的上一级目录，
     * 而我们的npm install的执行应该在<projectName>目录下，
     * 所以cwd需要调整
     */
    const childProcess = execa.command('npm install', {
        cwd: path.resolve(process.cwd(), projectName)
    });

    childProcess.stdout.on('data', buffer => {
        process.stdout.write(buffer);
    });
}