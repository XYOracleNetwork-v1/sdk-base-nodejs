export interface IXyoPluginWithConfig {
  config: any
  plugin: IXyoPlugin
}

export interface IXyoPluginDelegate {
  config: any
  deps: { [key: string]: any }
  graphql: IXyoGraphQlDelegate
  mutex: IXyoBoundWitnessMutexDelegate
}

export interface IXyoPlugin {
  getName(): string
  getPluginDependencies(): string[]
  getProvides(): string[]
  initialize(delegate: IXyoPluginDelegate): Promise<boolean>
}

export interface IXyoConfig {
  plugins: IXyoPluginConfig[]
  port: number
}

export interface IXyoPluginConfig {
  config: any
  type: string
}

export interface IXyoGraphQlDelegate {
  addQuery(queryString: string): void
  addResolver(query: string, resolver: any): void
  addType(type: string): void
}

export interface IXyoBoundWitnessMutexDelegate {
  acquireMutex(): boolean
  releaseMutex(): boolean
}
