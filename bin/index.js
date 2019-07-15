#! /usr/bin/env node

const program = require('commander');

program
    .command('create <projectName>')
    .action((projectName) => {
        require('../lib/command/create.js')(projectName);
    });

program
    .command('serve')
    .action(() => {
        require('../lib/command/serve.js')();
    });

program.parse(process.argv);