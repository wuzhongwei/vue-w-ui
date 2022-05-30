#!/usr/bin/env node
const { Command } = require('commander');
const { build } = require('./commands/build');
const { VERSION } = require('./shared/constant');
const { release } = require('./commands/release');
const { generateDts } = require('./commands/generate-dts');

const program = new Command();

program
  .command('build')
  .description('打包组件库')
  .hook('postAction', generateDts)
  .action(build);

program
  .command('release')
  .description('发布npm包')
  .action(release);

program.parse().version(VERSION);
