const fs = require('fs-extra'),
    path = require('path'),
    getPackageJson = require('../config/packageJson');

module.exports = function (type, projectName) {
    let targetDir = path.resolve(process.cwd(), `${projectName}/package.json`);

    try {
        fs.writeFileSync(targetDir, JSON.stringify(getPackageJson(type, projectName)));
    } catch (err) {
        console.log(err);
    }
}