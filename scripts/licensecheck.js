#!/usr/bin/env node
const checker = require('license-checker');

const allowedLicense = [
  'MIT',
  'BSD',
  'BSD-2-Clause',
  'BSD-3-Clause',
  'Apache-2.0',
  'Apache 2.0',
  'ISC',
  'Unlicense',
  'BSD*',
  'CC0-1.0',
  'LGPL-3.0',
  'WTFPL',
  'CC-BY-3.0',
];

const excludePackages = [
  '@apollographql/graphql-playground-html@1.6.6',
];

checker.init({
  start: './',
  onlyAllow: allowedLicense.join(';'),
  excludePackages: excludePackages.join(';'),
  production: true,
}, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log('License Check Passed');
    process.exit(0);
  }
});
