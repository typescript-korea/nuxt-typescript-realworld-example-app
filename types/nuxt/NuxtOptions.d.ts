import {VueConstructor} from 'vue'
import {Route} from 'vue-router'
import {KeyObject} from './KeyObject'
import {Nuxt} from './Nuxt'
import {Server} from './Server'

export interface NuxtOptions {
  build?: NuxtBuildOptions
  buildDir?: string
  css?: any[]
  dev?: boolean
  env?: KeyObject
  generate?: NuxtGenerateOptions
  head?: NuxtHeadOptions
  hooks?: NuxtHooksOptions
  ignore?: any
  loading?: any
  loadingIndicator?: any
  mode?: any
  modern?: any
  modules?: Array<NuxtModuleOptions | string>
  modulesDir?: any
  plugins?: any
  render?: any
  rootDir?: string
  router?: NuxtRouterOptions
  server?: any
  serverMiddleware?: any
  srcDir?: string
  transition?: any
  vue?: typeof VueConstructor.config
  watch?: string[]
  globalName?: KeyObject<string | ((globalName: string) => string)>
  watchers?: NuxtWatchersOptions
}

export interface NuxtWatchersOptions {
  chokidar?: any
  webpack?: any
}

export interface NuxtHooksOptionsNuxt {
  ready?: (nuxt: Nuxt) => void
  error?: (error: Error) => void
  close?: (nuxt: Nuxt) => void
  listen?: (server: Server, context: {host: string, port: string}) => void
}

export interface NuxtHooksOptionsRender {
  before?: (renderer: any, options: any) => void
  setupMiddleware?: (app: any) => void
  errorMiddleware?: (app: any) => void
  resourcesLoaded?: (resources: any) => void
  done?: (renderer: any) => void
  routeContext?: (contextNuxt: any) => void
  route?: (url: string, result: any, context: any) => void
  routeDone?: (url: string, result: any, context: any) => void
}

export interface NuxtHooksOptionsBuild {
  before?: (nuxt: Nuxt, buildOptions: any) => void
  templates?: (templatesFiles: any, templateVars: any, resolve: any) => void
  extendRoutes?: (routes: any, resolve: any) => void
  compile?: (name: string, compiler: any) => void
  compiled?: (name: string, compiler: any, stats: any) => void
  done?: (nuxt: Nuxt) => void
}

export interface NuxtHooksOptionsGenerate {
  before?: (nuxt: Nuxt, generateOptions: any) => void
  distRemoved?: (nuxt: Nuxt) => void
  distCopied?: (nuxt: Nuxt) => void
  page?: (route: Route, path: string, html: any) => void
  routeCreated?: (route: Route, path: string, errors: any) => void
  extendRoutes?: (routes: any) => void
  routeFailed?: (route: Route, errors: any) => void
  done?: (nuxt: Nuxt, errors: any) => void
}

export interface NuxtHooksOptionsModules {
  before?: (moduleContainer: any, options: any) => void
  done?: (moduleContainer: any) => void
}

export interface NuxtHooksOptions {
  build?: NuxtHooksOptionsBuild
  nuxt?: NuxtHooksOptionsNuxt
  render?: NuxtHooksOptionsRender
  generate?: NuxtHooksOptionsGenerate
  modules?: NuxtHooksOptionsModules
}

export interface NuxtBuildOptions {
  analyze?: boolean | NuxtBuildAnalyzeOptions
  babel?: NuxtBuildBabelOptions
  cache?: boolean | any
  crossorigin?: any // unknown
  cssSourceMap?: any
  devMiddleware?: any
  extractCSS?: boolean | any
  filenames?: NuxtBuildFileNameOptions
  friendlyErrors?: boolean | any
  hardSource?: boolean | any
  hotMiddleware?: any
  html?: any
  loaders?: NuxtBuildLoadersOptions
  optimization?: NuxtBuildOptimizationOptions
  optimizeCSS?: any
  parallel?: any
  plugins?: any[]
  postcss?: any
  profile?: any
  publicPath?: string
  quiet?: boolean
  splitChunks?: any
  ssr?: any
  stats?: any
  styleResources?: any
  template?: any
  templates?: any[]
  terser?: any
  transpile?: any[]
  useForkTsChecker?: boolean | any
  watch?: any[]
}

/**
 * Configure the generation of your universal web application to a static web application.
 * When launching nuxt generate or calling nuxt.generate(), Nuxt.js will use the configuration
 * defined in the generate property.
 */
export interface NuxtGenerateOptions {
  /**
   * Directory name created by nuxt generate.
   */
  dir?: string
  /**
   * The path to the SPA fallback. This file can be used when doing deploys of generated sites to
   * static hosting. It falls back to mode: 'spa' when a route isn't generated.
   */
  fallback?: string | boolean
  interval?: number
  minify?: any
  routes?: string[] | (() => string[])
}

export interface NuxtHeadOptions {
  title?: string
  titleTemplate?: string
  htmlAttrs?: KeyObject
  bodyAttrs?: KeyObject
  base?: KeyObject<string>
  meta?: KeyObject[]
  link?: any[]
  style?: KeyObject[]
  script?: KeyObject[]
  noscript?: KeyObject[]
}

export type NuxtModuleOptions = [string, any]

export interface NuxtBuildBabelOptions {
  presets?: any[]
  plugins?: any[]
  [key: string]: any
}

export interface NuxtRouterOptions {
  middleware?: any
}

export interface NuxtBuildAnalyzeOptions {
  analyzerMode?: 'static' | 'server' | 'disabled' | string
  analyzerHost?: string
  analyzerPort?: number
  reportFilename?: string
  defaultSizes?: 'stat' | 'parsed' | 'gzip' | string
  openAnalyzer?: boolean
  generateStatsFile?: boolean
  statsFilename?: string
  statsOptions?: null | KeyObject
  excludeAssets?: null | ExcludeAssetsPattern | ExcludeAssetsPattern[]
  logLevel?: 'info' | 'warn' | 'error' | 'silent' | string
}

export type ExcludeAssetsPattern = string | Function | RegExp

export interface NuxtBuildFileNameOptions {
  app?: FileNameFn
  chunk?: FileNameFn
  css?: FileNameFn
  img?: FileNameFn
  font?: FileNameFn
  video?: FileNameFn

  [key: string]: FileNameFn | any
}

export interface FileNameContext {
  isDev: boolean
  isClient: boolean
  isServer: boolean
}

type FileNameFn = (ctx: FileNameContext) => any

export interface NuxtBuildVueOptions {
  transformAssetUrls?: {
    video?: string | any,
    source?: string | any,
    object?: string | any,
    embed?: string | any,
    [key: string]: string | any,
  }
}

export interface NuxtBuildLoadersOptions {
  file?: any
  fontUrl?: {limit?: number}
  imgUrl?: {limit?: number}
  pugPlain?: any
  vue?: NuxtBuildVueOptions
  css?: any
  cssModules?: any
  less?: any
  sass?: any
  stylus?: any
  ts?: any
  tsx?: any
  vueStyle?: any
}

export interface NuxtBuildOptimizationOptions {
  runtimeChunk?: string | any
  minimize?: any
  minimizer?: any
  splitChunks?: {
    chunks?: any,
    automaticNameDelimiter?: any,
    name?: any,
    cacheGroups?: any,
  }
}
