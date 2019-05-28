#!/usr/bin/env node
// this should only be run in the context of yarn so that the local bin folder is available

const { spawnSync } = require('child_process');
const chalk = require('chalk');
const fs = require('fs-extra');

// the prefix makes this so the script will work for both the base build
// and any project that includes it
let prefix = 'node_modules/@xyo-network/sdk-base-nodejs/';

if (!fs.existsSync(prefix)) {
  // this means we are actually building the sdk-base-nodejs project
  prefix = '';
}

console.log(chalk.green('XY Typescript Build: Start'));

const hooksResult = spawnSync('yarn', ['hooks'], {
  stdio: 'inherit',
});

if (hooksResult.status !== 0) {
  process.exit(hooksResult.status);
}

console.log(chalk.gray('Compiling Typescript'));
if (!fs.existsSync('tsconfig.json')) {
  console.log(chalk.yellow('No tsconfig.json found. Creating...'));
  fs.copySync(`${prefix}templates/tsconfig.json`, 'tsconfig.json');
}
const buildResult = spawnSync('tsc', ['-b'], {
  stdio: 'inherit',
});

if (buildResult.status !== 0) {
  console.log(chalk.red('XY Typescript Build: Failed'));
  process.exit(buildResult.status);
}

const lintResult = spawnSync('yarn', ['lint'], {
  stdio: 'inherit',
});

if (lintResult.status !== 0) {
  process.exit(lintResult.status);
}

console.log(chalk.green('XY Typescript Build: Complete'));
process.exit(0);
