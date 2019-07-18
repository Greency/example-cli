const fs = require('fs-extra'),
    path = require('path');

module.exports = function(type, projectName){
    let targetDir = path.resolve(process.cwd(), projectName),  //获取当前命令执行的目录
        templateDir = path.resolve(__dirname, `../template/${type}`);

    //先判断<projectName>目录是否已存在
    if (fs.existsSync(targetDir)) {
        console.log(`<${projectName}> 目录已存在，请输入一个新的项目名称！`);
    } else {
        try {
            //新建<projectName>目录
            fs.mkdirSync(targetDir);
            //将template下的src整个复制到指定的目录下
            fs.copySync(templateDir, targetDir);
        } catch (err) {
            console.log(err);
        }
    }
}