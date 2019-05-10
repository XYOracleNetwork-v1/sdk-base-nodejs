//this script is meant only to be run by the sdk-base-nodejs for its own hook.
//all dependent packages will get the main hooks script
const path = require('path')
const fs = require('fs-extra')

const srcHooksFolder = path.resolve(`hooks`)
const dstHooksFolder = path.resolve('.git/hooks')

fs.copy(srcHooksFolder, dstHooksFolder, {}, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log("Hooks copied")
  }
})