export interface IXyoLog {
  logInfo(msg: string, tag?: string): void
  logError(msg: string, tag?: string): void
  logVerbose(msg: string, tag?: string): void
  logDebug(msg: string, tag?: string): void
  logWarning(msg: string, tag?: string): void
}
