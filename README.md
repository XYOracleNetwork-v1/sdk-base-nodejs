[logo]: https://cdn.xy.company/img/brand/XY_Logo_GitHub.png

# [![logo]](https://xy.company)

# sdk-base-nodejs

![NPM](<https://img.shields.io/npm/v/@xyo-network/sdk-base-nodejs.svg>)
[![Build Status](https://travis-ci.com/XYOracleNetwork/sdk-base-nodejs.svg?token=pZupZyvUXyv7kQHGUhCq&branch=master)](https://travis-ci.com/XYOracleNetwork/sdk-base-nodejs)
[![Maintainability](https://api.codeclimate.com/v1/badges/7d316730bfdfbe4e1f73/maintainability)](https://codeclimate.com/repos/5cc23851684dee02400005ef/maintainability)
[![DepShield Badge](https://depshield.sonatype.org/badges/XYOracleNetwork/sdk-base-nodejs/depshield.svg)](https://depshield.github.io)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/008ea5b134ea4a9195b8deedeaf1665d)](https://www.codacy.com/app/XYOracleNetwork/sdk-base-nodejs?utm_source=github.com&utm_medium=referral&utm_content=XYOracleNetwork/sdk-base-nodejs&utm_campaign=Badge_Grade)
[![Chat](https://img.shields.io/gitter/room/XYOracleNetwork/Stardust.svg)](https://gitter.im/XYOracleNetwork/Dev)

## Table of Contents

-   [Title](#sdk-base-nodejs)
-   [Description](#description)
-   [Logging](#logging)
-   [Maintainers](#maintainers)
-   [License](#license)
-   [Credits](#credits)

## Description

A core util/logging library inspired by XYO.

## Logging

You can access the logger from `XyoBase` or from an instance of `IXyoLog`. Logging levels are in the following order:

-   Error
-   Warning
-   Info (default)
-   Verbose
-   Debug
-   Silly

You can change the logging level for the console and for the log file by changing the environment vars: `XYO_LOG` (for logs), and `XYO_CONSOLE` (for console). The path and name of the log can be changed with the environment vars: `XYO_LOG_PATH` and `XYO_LOG_NAME`.

## Maintainers

-   Carter Harrison
-   Arie Trouw

## License

See the [LICENSE.md](LICENSE) file for license details.

## Credits

Made with 🔥and ❄️ by [XY - The Persistent Company](https://www.xy.company)
