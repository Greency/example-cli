#! /usr/bin/env node

const program = require('commander');

program
    .command('create <projectName>')
    .action((projectName) => {
        require('../lib/command/create.js')('application', projectName);
    });

program
    .command('create-lib <projectName>')
    .action((projectName) => {
        require('../lib/command/create.js')('library', projectName);
    });

program
    .command('serve-app')
    .action(() => {
        require('../lib/command/execNode.js')('serveApplication');
    });

program
    .command('serve-lib')
    .action(() => {
        require('../lib/command/execNode.js')('serveLibrary');
    });

program
    .command('build-app')
    .action(() => {
        require('../lib/command/execNode.js')('buildApplication');
    });

program
    .command('build-entire-lib')
    .action(() => {
        require('../lib/command/execNode.js')('buildEntireLibrary');
    });

program
    .command('build-each-lib')
    .action(() => {
        require('../lib/command/execNode.js')('buildEachLibrary');
    });

program.parse(process.argv);