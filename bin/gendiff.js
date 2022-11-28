#!/usr/bin/env node
import { Command } from 'commander';
// eslint-disable-next-line import/extensions
import diff from '../src/index.js';

const program = new Command();

program
  .option('-f, --format <type>', 'output format')
  .name('gendiff')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .action((filepath1, filepath2) => {
    console.log(diff(filepath1, filepath2, program.opts().format));
  });

program.parse();
