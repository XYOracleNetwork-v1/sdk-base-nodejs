var checker = require('license-checker');
 
const allowedLicense = [
  'MIT',
  'BSD',
  'BSD-2-Clause',
  'BSD-3-Clause',
  'Apache-2.0',
  'ISC',
  'Unlicense',
  'BSD*',
  'CC0-1.0',
  'LGPL-3.0',
  'WTFPL',
  'CC-BY-3.0'
]

return new Promise((resolve, reject) => {
  checker.init({
    start: './',
    onlyAllow: allowedLicense.join(';')
  }, function(err, packages) {
      if (err) {
          reject(err)
      } else {
          console.log('License Check Passed')
          resolve(packages)
      }
  })
})