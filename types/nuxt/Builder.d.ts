import {Nuxt} from './Nuxt'
import {NuxtOptions} from './NuxtOptions'

export declare class Builder {
    readonly nuxt: Nuxt
    readonly plugins: any[]
    readonly options: NuxtOptions
    constructor(nuxt: Nuxt)

    build(): Promise<Builder>
}
