const path = require('path'),
    execa = require('execa');

module.exports = function (type) {
    let relativePath = path.resolve(__dirname, `../scripts/${type}.js`);

    execa('node', [relativePath]).stdout.on('data', buffer => {
        process.stdout.write(buffer);
    });
}