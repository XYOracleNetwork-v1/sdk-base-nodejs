/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IXyoLog } from './xyo-log'
import winston from 'winston'

// XYO_LOG=""
// XYO_CONSOLE
// XYO_LOG_PATH=""
// XYO_LOG_NAME=""

export class XyoWinstonLogger implements IXyoLog {
  public static buildLogger(): winston.Logger {
    return winston.createLogger({
      transports: XyoWinstonLogger.getWinstonTransports(),
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  }

  private static getWinstonTransports(): any[] {
    const consoleType = process.env.XYO_CONSOLE || 'info'
    const logTypes = process.env.XYO_LOG || 'error'
    const logName = process.env.XYO_LOG_NAME || 'all'

    const consoleLogger = new winston.transports.Console({
      level: consoleType
    })

    const transports: any[] = [consoleLogger]
    const path = process.env.XYO_LOG_PATH || './'

    transports.push(
      new winston.transports.File({
        filename: `${path}/${logName}.log`,
        level: logTypes
      })
    )

    return transports
  }

  private logger = XyoWinstonLogger.buildLogger()

  public logInfo(msg: string, tag?: string) {
    this.logger.info(msg, tag)
  }

  public logError(msg: string, tag?: string) {
    this.logger.error(msg, tag)
  }

  public logVerbose(msg: string, tag?: string) {
    this.logger.verbose(msg, tag)
  }

  public logDebug(msg: string, tag?: string) {
    this.logger.debug(msg, tag)
  }

  public logWarning(msg: string, tag?: string) {
    this.logger.warn(msg, tag)
  }
}
