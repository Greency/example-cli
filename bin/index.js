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
    .command('serve')
    .action(() => {
        require('../lib/command/execNode.js')('serve');
    });

program
    .command('build')
    .action(() => {
        require('../lib/command/execNode.js')('build');
    });

program
    .command('lib-entirety')
    .action(() => {
        require('../lib/command/execNode.js')('libEntirety');
    });

program
    .command('lib-each')
    .action(() => {
        require('../lib/command/execNode.js')('libEach');
    });

program.parse(process.argv);