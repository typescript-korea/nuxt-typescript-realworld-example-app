import {HookAble} from './HookAble'
import {ModuleContainer} from './Module'
import {NuxtOptions} from './NuxtOptions'
import {Resolver} from './Resolver'
import {Server} from './Server'

export declare class Nuxt extends HookAble {
  /**
   * Nuxt options
   */
  readonly options: NuxtOptions
  readonly resolver: Resolver
  readonly moduleContainer: ModuleContainer
  readonly server: Server
  readonly renderer: Server
  readonly render: any
  readonly initialized: boolean
  readonly version: string

  constructor(options?: NuxtOptions)

  ready(): Promise<any>

  close(): Promise<any>

  listen(...args: any[]): Promise<any>
}
