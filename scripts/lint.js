#!/usr/bin/env node
 // this should only be run in the context of yarn so that the local bin folder is available	

const {
  spawnSync
} = require('child_process');
const chalk = require('chalk');
const fs = require('fs-extra');

// the prefix makes this so the script will work for both the base build and	
// any project that includes it	
let prefix = 'node_modules/@xyo-network/sdk-base-nodejs/';

if (!fs.existsSync(prefix)) {
  prefix = '';
}

console.log(chalk.green('XY Typescript Linting'));

if (!fs.existsSync('.eslintrc.js')) {
  console.log(chalk.yellow('No eslintrc found!'));
}

if (!fs.existsSync('tsconfig.json')) {
  console.log(chalk.yellow('No tsconfig.json found. Creating...'));
  fs.copySync(`${prefix}templates/tsconfig.json`, 'tsconfig.json');
}

const buildResult = spawnSync('tslint', ['-c', '.eslintrc.js', '-p', 'tsconfig.json'], {
  stdio: 'inherit',
});

if (buildResult.status !== 0) {
  console.log(chalk.red('XY Typescript Linting: Failed'));
  process.exit(buildResult.status);
}

console.log(chalk.green('XY Typescript Linting: Complete'));
process.exit(0);