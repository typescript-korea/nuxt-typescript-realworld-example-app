import {HookAble} from './HookAble'
import {ModuleContainer} from './Module'
import {NuxtOptions} from './NuxtOptions'
import {Resolver, ResolverInNuxt} from './Resolver'
import {Server, ServerInNuxt} from './Server'

type NuxtExtends = HookAble & ServerInNuxt & ResolverInNuxt

export declare class Nuxt extends NuxtExtends {
  static get version(): string
  /**
   * Nuxt options
   */
  readonly options: NuxtOptions
  readonly resolver: Resolver
  readonly moduleContainer: ModuleContainer
  readonly server: Server
  readonly renderer: Server
  readonly render: typeof Server.app
  readonly initialized: boolean
  readonly version: string

  constructor(options?: NuxtOptions): Nuxt

  showReady(): void

  ready(): Promise<any>

  close(): Promise<any>
}
