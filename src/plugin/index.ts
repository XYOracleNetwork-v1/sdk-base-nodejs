
export interface IXyoPluginWithConfig {
  config: any,
  plugin: IXyoPlugin
}

export interface IXyoPlugin {
  getName(): string
  getProvides(): string[]
  getPluginDependencies(): string[]

  initialize(
    deps: { [key: string]: any; },
    config: any, graphql?: IXyoGraphQlDelegate,
    mutex?: IXyoBoundWitnessMutexDelegate
  ): Promise<boolean>
}

export interface IXyoConfig {
  port: number,
  remote: IXyoRemoteConfig[],
  plugins: IXyoPluginConfig[],
}

export interface IXyoPluginConfig {
  packageName: string
  config: any
  path?: string
}

export interface IXyoRemoteConfig {
  type: string
  name: string
  version: string
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
