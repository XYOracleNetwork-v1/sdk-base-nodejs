import { IXyoLog } from './xyo-log'
import winston from 'winston'

// XYO_LOG_ERROR=false/true
// XYO_LOG_INFO=false/true
// XYO_LOG_WARN=false/true
// XYO_LOG_VERBOSE=false/true
// XYO_LOG_DEBUG=false/true
// XYO_LOG_PATH

export class XyoWinstonLogger implements IXyoLog {

  public static buildLogger (): winston.Logger {
    return winston.createLogger({
      transports: XyoWinstonLogger.getWinstonTransports(),
      format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
        )
    })
  }

  private static getWinstonTransports (): any[]  {
    const transports: any[] = [new winston.transports.Console()]
    const path = process.env.XYO_LOG_PATH || './'

    if (process.env.XYO_LOG_ERROR === 'true') {
      transports.push(new winston.transports.File({ filename: `${path}/error.log`, level: 'error' }))
    }

    if (process.env.XYO_LOG_INFO === 'true') {
      transports.push(new winston.transports.File({ filename: `${path}/info.log`, level: 'info' }))
    }

    if (process.env.XYO_LOG_WARN === 'true') {
      transports.push(new winston.transports.File({ filename: `${path}/warn.log`, level: 'warn' }))
    }

    if (process.env.XYO_LOG_VERBOSE === 'true') {
      transports.push(new winston.transports.File({ filename: `${path}/verbose.log`, level: 'verbose' }))
    }

    if (process.env.XYO_LOG_DEBUG === 'true') {
      transports.push(new winston.transports.File({ filename: `${path}/debug.log`, level: 'debug' }))
    }

    return transports
  }

  private logger = XyoWinstonLogger.buildLogger()

  public logInfo (msg: string, tag?: string) {
    this.logger.info(msg, tag)
  }

  public logError(msg: string, tag ?: string) {
    this.logger.error(msg, tag)
  }

  public logVerbose(msg: string, tag ?: string) {
    this.logger.verbose(msg, tag)
  }

  public logDebug(msg: string, tag ?: string) {
    this.logger.debug(msg, tag)
  }

  public logWarning(msg: string, tag ?: string) {
    this.logger.warn(msg, tag)
  }
}
