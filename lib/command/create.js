const createProject = require('../utils/createProject'),
    createPackageJson = require('../utils/createPackageJson'),
    installDependencies = require('../utils/installDependencies');

module.exports = function (type, projectName) {
    createProject(type, projectName);
    createPackageJson(type, projectName);
    installDependencies(projectName);
}