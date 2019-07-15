#! /usr/bin/env node

const program = require('commander');

program
    .command('create <projectName>')
    .action((projectName) => {
        require('../command/create.js');
    });

program.parse(process.argv);