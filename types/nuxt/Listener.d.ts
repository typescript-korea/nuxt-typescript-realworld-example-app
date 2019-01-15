export declare class Listener {
    port: any
    host: any
    socket: any
    https: any
    app: any
    dev: any
    listening: boolean
    server: null | any
    address: null | any
    url: null | any

    constructor(ctx: any)

    close(): Promise<any>

    listen(): Promise<any>

    computeURL(): void

    serverErrorHandler(error: any): void
}
