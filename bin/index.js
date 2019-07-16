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

program
    .command('build')
    .action(()=>{
        require('../lib/command/build.js')();
    });

program
    .command('lib-entirety')
    .action(()=>{
        require('../lib/command/libEntirety')();
    });

program.parse(process.argv);