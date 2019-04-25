import { XyoWinstonLogger } from './log'

const log = new XyoWinstonLogger()

export class XyoBase  {

  protected logInfo (msg: string) {
    log.logInfo(msg, this.constructor.name)
  }

  protected logError (msg: string) {
    log.logError(msg, this.constructor.name)
  }

  protected logVerbose (msg: string) {
    log.logVerbose(msg, this.constructor.name)
  }

  protected logWarning (msg: string) {
    log.logWarning(msg, this.constructor.name)
  }

  protected logDebug (msg: string) {
    log.logDebug(msg, this.constructor.name)
  }

}
