import {ClientRequest, ServerResponse} from 'http'
import {VueConstructor} from 'vue'
import {Route} from 'vue-router'
import {Store} from 'vuex'
import {KeyObject} from './KeyObject'

export type PluginInject = (name: string, value?: any) => void
export type Plugin = (ctx: PluginContext, inject: PluginInject) => void

export interface ErrorFnParams {
  statusCode: number
  message: string
  [key: string]: any
}

export type ReDirectFn = ((path: string) => void)
  | ((status: string, path: string, query?: KeyObject) => void)
export type ErrorFn = (params: ErrorFnParams) => void

export type BeforeNuxtRenderCb = (cxt: {Components: any, nuxtState: KeyObject}) => void
export type BeforeNuxtRenderFn = (cb: BeforeNuxtRenderCb) => void
