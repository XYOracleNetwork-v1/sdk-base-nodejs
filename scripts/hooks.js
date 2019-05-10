const path = require('path')
const fs = require('fs-extra')

const srcHooksFolder = path.resolve(`node_modules/@xyo-network/sdk-base-nodejs/hooks`)
const dstHooksFolder = path.resolve('.git/hooks')

fs.copy(srcHooksFolder, dstHooksFolder, {}, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log("Hooks copied")
  }
})