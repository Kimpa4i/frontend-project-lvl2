#!/usr/bin/env node

const { program } = require('commander');

program
  .option('-f, --format <type>', 'output format')
  .name('gendiff')
  .argument('<filepath1>,<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0');



program.parse();


