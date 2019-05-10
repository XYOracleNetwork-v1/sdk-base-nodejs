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

console.log(chalk.green('XY Typescript Linting'))
if (prefix.length > 0) {
  fs.copySync(`${prefix}tslint.json`, `tslint.json`)
}
let buildResult = spawnSync('tslint', ['-c', `tslint.json`, '-p', `tsconfig.json`], {
  stdio: 'inherit'
})

if (buildResult.status !== 0) {
  console.log(chalk.red(`XY Typescript Linting: Failed`))
  return buildResult.status
}

console.log(chalk.green(`XY Typescript Linting: Complete`))
return 0