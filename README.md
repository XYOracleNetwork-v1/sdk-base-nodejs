[logo]: https://cdn.xy.company/img/brand/XY_Logo_GitHub.png

[![logo]](https://xy.company)

# sdk-base-nodejs
[![](https://img.shields.io/gitter/room/XYOracleNetwork/Stardust.svg)](https://gitter.im/XYOracleNetwork/Dev) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![Build Status](https://travis-ci.com/XYOracleNetwork/sdk-base-nodejs.svg?token=pZupZyvUXyv7kQHGUhCq&branch=master)](https://travis-ci.com/XYOracleNetwork/sdk-base-nodejs) [![Maintainability](https://api.codeclimate.com/v1/badges/7d316730bfdfbe4e1f73/maintainability)](https://codeclimate.com/repos/5cc23851684dee02400005ef/maintainability)

A core util/logging library inspired by XYO.

## Logging

You can access the logger from `XyoBase` or from an instance of `IXyoLog`. Logging levels are in the following order:

* Error
* Warning
* Info (default)
* Verbose
* Debug
* Silly

You can change the logging level for the console and for the log file by changing the environment vars: `XYO_LOG` (for logs), and `XYO_CONSOLE` (for console). The path and name of the log can be changed with the environment vars: `XYO_LOG_PATH` and `XYO_LOG_NAME`.
