const webpack = require('webpack');

let buildConfig = require('../config/library/entirety');
const compiler = webpack(buildConfig);

compiler.run((err, stats) => {
    if (err || stats.hasErrors()) {
        if (err)
            console.log(err);

        if (stats.hasErrors())
            console.log(stats.toJson('minimal').errors);

        if (stats.hasWarnings())
            console.log(stats.toJson('minimal').warnings);
    } else {
        console.log('build successful!');
    }
});