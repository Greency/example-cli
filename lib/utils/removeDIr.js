const fs = require('fs-extra');

module.exports = function (dir, fn) {
    if (fs.existsSync(dir)) {
        try {
            fs.removeSync(dir);
        } catch (e) {
            console.log(e);
        }
    } else {
        fn();
    }
}