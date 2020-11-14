/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IXyoLog } from './log'

export class XyoBase {
  public static log: IXyoLog | undefined

  protected logInfo(msg: string) {
    if (!XyoBase.log) {
      console.info(msg)
      return
    }

    XyoBase.log.logInfo(msg, this.constructor.name)
  }

  protected logError(msg: string) {
    if (!XyoBase.log) {
      console.error(msg)
      return
    }

    XyoBase.log.logError(msg, this.constructor.name)
  }

  protected logVerbose(msg: string) {
    if (!XyoBase.log) {
      console.log(msg)
      return
    }

    XyoBase.log.logVerbose(msg, this.constructor.name)
  }

  protected logWarning(msg: string) {
    if (!XyoBase.log) {
      console.warn(msg)
      return
    }

    XyoBase.log.logWarning(msg, this.constructor.name)
  }

  protected logDebug(msg: string) {
    if (!XyoBase.log) {
      console.log(msg)
      return
    }

    XyoBase.log.logDebug(msg, this.constructor.name)
  }
}
