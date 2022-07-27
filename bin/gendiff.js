#!/usr/bin/env node
import diff from '/Users/andrew/Desktop/frontend-project-lvl2/src/index.js';
import { Command } from 'commander';
const program = new Command();

program
  .option('-f, --format <type>', 'output format')
  .name('gendiff')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .action((filepath1, filepath2) =>{
    console.log(diff(filepath1,filepath2));
  });

program.parse();
