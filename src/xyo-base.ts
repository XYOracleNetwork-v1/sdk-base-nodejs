/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IXyoLog } from './log'

export class XyoBase {
  public static log: IXyoLog | undefined

  protected logInfo(msg: string) {
    if (!XyoBase.log) {
      return
    }

    XyoBase.log.logInfo(msg, this.constructor.name)
  }

  protected logError(msg: string) {
    if (!XyoBase.log) {
      return
    }

    XyoBase.log.logError(msg, this.constructor.name)
  }

  protected logVerbose(msg: string) {
    if (!XyoBase.log) {
      return
    }

    XyoBase.log.logVerbose(msg, this.constructor.name)
  }

  protected logWarning(msg: string) {
    if (!XyoBase.log) {
      return
    }

    XyoBase.log.logWarning(msg, this.constructor.name)
  }

  protected logDebug(msg: string) {
    if (!XyoBase.log) {
      return
    }

    XyoBase.log.logDebug(msg, this.constructor.name)
  }
}
