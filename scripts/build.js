//this should only be run in the context of yarn so that the local bin folder is available

const {spawnSync} = require('child_process')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs-extra')

//the prefix makes this so the script will work for both the base build and any project that includes it
let prefix = "node_modules/@xyo-network/sdk-base-nodejs/"

if (!fs.existsSync(prefix)) {
  prefix = ''
}

console.log(chalk.green('XY Typescript Build: Start'))

let hooksResult = spawnSync('yarn', ['hooks'], {
  stdio: 'inherit'
})

if (hooksResult.status !== 0) {
  return hooksResult.status
}

console.log(chalk.gray('Compiling Typescript'))
if (prefix.length > 0) {
  fs.copySync(`${prefix}tsconfig.json`, `tsconfig.json`)
}
let buildResult = spawnSync('tsc', ['-b'], {
  stdio: 'inherit'
})

if (buildResult.status !== 0) {
  console.log(chalk.red(`XY Typescript Build: Failed`))
  return buildResult.status
}

let lintResult = spawnSync('yarn', ['lint'], {
  stdio: 'inherit'
})

if (lintResult.status !== 0) {
  return lintResult.status
}

console.log(chalk.green(`XY Typescript Build: Complete`))
return 0