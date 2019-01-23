import {ClientRequest, ServerResponse} from 'http'
import {VueConstructor} from 'vue'
import {Store} from 'vuex'
import {KeyObject} from './KeyObject'
import {ErrorFn, ReDirectFn} from './Plugin'

export interface Context extends ClientContext, ServerContext{
  app: VueConstructor
  isClient: boolean
  isServer: boolean
  isStatic: boolean
  isDev: boolean
  isHMR: boolean
  route: Route
  from: Route
  store: Store
  env: KeyObject
  params: KeyObject
  query: KeyObject
  redirect: ReDirectFn
  error: ErrorFn
}

export interface ClientContext {
  nuxtState: KeyObject
}

export interface ServerContext {
  req: ClientRequest
  res: ServerResponse
  beforeNuxtRender: Function
}
