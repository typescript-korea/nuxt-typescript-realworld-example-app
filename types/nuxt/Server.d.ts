import {Listener} from './Listener'
import {Nuxt} from './Nuxt'
import {NuxtOptions} from './NuxtOptions'

export declare class Server {
    readonly nuxt: Nuxt
    readonly options: NuxtOptions
    readonly globals: any
    readonly publicPath: any
    readonly resources: any
    readonly devMiddleware: null | any
    readonly hotMiddleware: null | any
    readonly listeners: Listener[]
    readonly renderer: any
    readonly app: any

    constructor(nuxt: Nuxt)

    ready(): Promise<any>

    setupMiddleware(): Promise<any>

    useMiddleware(middleware: any): void

    renderRoute(url: string, context?: any, retries?: number): any

    loadResources(...any: any[]): any

    renderAndGetWindow(url: string, jsdomOptions?: any): any

    listen(port: any, host: any, socket?: any): Promise<any>

    close(): any
}
