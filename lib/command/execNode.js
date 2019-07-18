const path = require('path');

module.exports = function (type) {
    let relativePath = path.resolve(__dirname, `../scripts/${type}.js`);
    
    execa('node', [relativePath]).stdout.on('data', buffer => {
        process.stdout.write(buffer);
    });
}