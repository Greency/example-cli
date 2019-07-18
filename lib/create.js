const createProject = require('./utils/createProject'),
    createPackageJson = require('./utils/createPackageJson');

module.exports = function(type, projectName){
    createProject(type, projectName);
    createPackageJson(type, projectName);
}