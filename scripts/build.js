const {spawnSync} = require('child_process')
const chalk = require('chalk')

console.log(chalk.green('XY Typescript Build: Start'))
console.log(chalk.gray('Compiling Typescript'))

let buildResult = spawnSync('tsc', ['-b'], {
  stdio: 'inherit'
})

if (buildResult.status != 0) {
  console.log(chalk.red(`XY Typescript Build: Failed`))
  return buildResult.status
}

console.log(chalk.green(`XY Typescript Build: Complete`))
return 0