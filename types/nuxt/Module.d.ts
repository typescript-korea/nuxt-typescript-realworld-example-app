import {KeyObject} from './KeyObject'
import {Nuxt} from './Nuxt'
import {NuxtBuildLoadersOptions, NuxtOptions} from './NuxtOptions'

export interface RequiredModule {
    src: string,
    handler: ModuleFn,
    options?: any,
}

export declare class ModuleContainer {
    readonly nuxt: Nuxt
  readonly options: NuxtOptions
    readonly requiredModules: KeyObject<RequiredModule>

    constructor(nuxt: Nuxt)

    ready(): Promise<any>

  /**
   * @deprecated
   */
  addVendor(): void

    addTemplate(template: any): {src: string, dst: string, options: KeyObject}

    addPlugin(): any

  addLayout(template: any, name: string): void

  addServerMiddleware(middleware: any): void

  extendBuild(moduleFunction: ModuleFn): void

  extendRoutes()
}

export interface ModuleFnState {
  isDev: boolean
  isClient: boolean
  isServer: boolean
  loaders: NuxtBuildLoadersOptions
}

export type ModuleFn = (this: ModuleContainer, options: ModuleFnState) => void
