const path = require('path')
const fs = require('fs-extra')
const chalk = require('chalk')

//the prefix makes this so the script will work for both the base build and any project that includes it
let prefix = "node_modules/@xyo-network/sdk-base-nodejs/"

if (!fs.existsSync(prefix)) {
  prefix = ''
}

const srcHooksFolder = path.resolve(`${prefix}hooks`)
const dstHooksFolder = path.resolve('.git/hooks')

console.log(chalk.green(`XY Copy Hooks: Start`))
fs.copy(srcHooksFolder, dstHooksFolder, {}, (err) => {
  if (err) {
    console.error(chalk.red(`XY Copy Hooks: Failed`))
  } else {
    console.log(chalk.green(`XY Copy Hooks: Complete`))
  }
})