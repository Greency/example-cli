const fs = require('fs-extra'),
    path = require('path');

module.exports = function(projectName){
    let targetDir = path.resolve(process.cwd(), projectName);  //获取当前命令执行的目录

    //先判断<projectName>目录是否已存在
    if (fs.existsSync(targetDir)){
        console.log(`<${projectName}> 目录已存在，请输入一个新的项目名称！`);
    } else {
        //新建<projectName>目录
        fs.mkdirSync(targetDir);
        
    }
}