const createDevProject = require('../utils/createDevProject'),
    createPackageJson = require('../utils/createPackageJson'),
    installDependencies = require('../command/installDependencies');


module.exports = function(projectName){
    //以<projectName>为名称创建目录，并将template目录下的src全部复制到<projectName>目录下
    createDevProject(projectName);
    //在<projectName>目录下，新建package.json文件，并在此文件中添加基本的信息以及项目所需要的依赖
    createPackageJson(projectName);
    //执行npmm install，安装项目的依赖
    installDependencies(projectName);
}