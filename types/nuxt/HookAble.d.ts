export interface HookAble {
  hook(name: any, fn: any): void

  clearHook(name: string): void

  clearHooks(): void

  flatHooks(configHooks: any, hooks?: any, parentName?: string): any[]

  addHooks(configHooks: any): void
}
