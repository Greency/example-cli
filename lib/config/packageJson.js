const scripts = {
    application: {
        "serve": "example-cli serve-app",
        "build": "example-cli build-app"
    },
    library: {
        "serve": "example-cli serve-lib",
        "build": "example-cli build-entire-lib && example-cli build-each-lib"
    }
};

module.exports = function (type, projectName) {
    let pkg = {
        name: projectName,
        version: '0.0.1',
        description: '',
        scripts: {},
        dependencies: {
            "css-loader": "^3.0.0",
            "vue": "^2.6.10",
            "vue-loader": "^15.7.0",
            "vue-template-compiler": "^2.6.10",
            "webpack": "^4.35.3",
            "style-loader": "^0.23.1",
            "@babel/core": "^7.5.5",
            "@babel/preset-env": "^7.5.5",
            "babel-loader": "^8.0.6"
        }
    };

    pkg.scripts = scripts[type];

    return pkg;
}