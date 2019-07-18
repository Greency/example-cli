
module.exports = function(type){
    let relativePath = '';

    switch(type){
        case 'serve': ;break;
        case 'build': ;break;
        case 'libEntirety': ;break;
        case 'libEach': ;break;
        default: throw new Error(`没有 <${type}> 此命令`);
    }
}