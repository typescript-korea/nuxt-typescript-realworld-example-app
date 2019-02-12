// Type definitions for nuxt 2.3
// Project: https://github.com/nuxt
// Definitions by: Bichi Kim <https://github.com/bichikim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module 'nuxt-ts' {
  export {
    Builder,
  } from './Builder'
  export {
    ModuleFn,
    ModuleContainer,
    ModuleFnState,
    RequiredModule,
  } from './Module'
  export {
    Nuxt,
  } from './Nuxt'
  export {
    HookAble,
  } from './HookAble'
  export {
    ExcludeAssetsPattern,
    FileNameContext,
    FileNameFn,
    NuxtBuildAnalyzeOptions,
    NuxtBuildBabelOptions,
    NuxtBuildFileNameOptions,
    NuxtBuildLoadersOptions,
    NuxtBuildOptimizationOptions,
    NuxtBuildOptions,
    NuxtBuildVueOptions,
    NuxtGenerateOptions,
    NuxtHeadOptions,
    NuxtHooksOptions,
    NuxtHooksOptionsBuild,
    NuxtHooksOptionsGenerate,
    NuxtHooksOptionsModules,
    NuxtHooksOptionsNuxt,
    NuxtHooksOptionsRender,
    NuxtModuleOptions,
    NuxtOptions,
    NuxtRouterOptions,
    NuxtWatchersOptions,
  } from './NuxtOptions'
  export {
    Resolver,
  } from './Resolver'
  export {
    Server,
  } from './Server'
  export {
    Listener,
  } from './Listener'
  export {
    BeforeNuxtRenderCb,
    Plugin,
    ErrorFnParams,
    BeforeNuxtRenderFn,
    ErrorFn,
    ReDirectFn,
    PluginInject,
  } from './Plugin'
  export {
    ClientContext,
    Context,
    ServerContext,
  } from './Context'
}

