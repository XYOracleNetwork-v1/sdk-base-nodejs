export interface IXyoPluginWithConfig {
  config: any
  plugin: IXyoPlugin
}

export interface IXyoPluginDelegate {
  deps: { [key: string]: any }
  config: any
  graphql: IXyoGraphQlDelegate
  mutex: IXyoBoundWitnessMutexDelegate
}

export interface IXyoPlugin {
  getName(): string
  getProvides(): string[]
  getPluginDependencies(): string[]
  initialize(delegate: IXyoPluginDelegate): Promise<boolean>
}

export interface IXyoConfig {
  port: number
  plugins: IXyoPluginConfig[]
}

export interface IXyoPluginConfig {
  type: string
  config: any
}

export interface IXyoGraphQlDelegate {
  addType(type: string): void
  addQuery(queryString: string): void
  addResolver(query: string, resolver: any): void
}

export interface IXyoBoundWitnessMutexDelegate {
  acquireMutex(): boolean
  releaseMutex(): boolean
}
