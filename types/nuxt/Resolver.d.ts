import {Nuxt} from './Nuxt'
import {NuxtOptions} from './NuxtOptions'

export declare class ResolverInNuxt {
  resolveAlias(path: string): any
  resolvePath(path: string, ctx?: any): any
}

export declare class Resolver extends ResolverInNuxt {
    readonly nuxt: Nuxt
    readonly options: NuxtOptions

    constructor(nuxt: Nuxt)

    resolveModule(path: string): any

    requireModule(path: string, ctx?: any): any
}
