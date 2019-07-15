const fs = require('fs-extra'),
    path = require('path');

module.exports = function (projectName) {
    let packageJsonConfig = require('../config/packageJson'),
        targetDir = path.resolve(process.cwd(), `${projectName}/package.json`);
    //修改name名称
    packageJsonConfig.name = projectName;
    
    try {
        fs.writeFileSync(targetDir, JSON.stringify(packageJsonConfig));
    } catch (err) {
        console.log(err);
    }
}