import {Nuxt} from './Nuxt'
import {NuxtOptions} from './NuxtOptions'

export declare class Resolver {
    readonly nuxt: Nuxt
    readonly options: NuxtOptions

    constructor(nuxt: Nuxt)

    resolveModule(path: string): any

    resolveAlias(path: string): any

    resolvePath(path: string, ctx?: any): any

    requireModule(path: string, ctx?: any): any
}
