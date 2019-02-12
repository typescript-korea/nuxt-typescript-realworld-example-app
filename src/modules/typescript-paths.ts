import {join} from 'path'
import {esModule} from '../utils'
import {ModuleContainer} from 'nuxt-ts'
interface TypescriptPathsOptions {
  configFile?: string
}
export default async function(this: ModuleContainer, options: TypescriptPathsOptions = {}) {
  const TsconfigPathsPlugin = esModule(await import('tsconfig-paths-webpack-plugin'))
  const {rootDir} = this.nuxt.options
  const {
    configFile = 'tsconfig.json',
  } = options
  const isTs: boolean = this.nuxt.options.extensions.indexOf('ts')

  if(isTs){
    // Extend build
    this.extendBuild((config, {isDev}) => {

      // For Ts paths
      if(!config.resolve.plugins){
        config.resolve.plugins = []
      }

      // add alias for tsconfig.json> compilerOptions.paths
      config.resolve.plugins.push(
        new TsconfigPathsPlugin({
          configFile: join(rootDir, configFile),
          baseUrl: rootDir,
        }),
      )
    })
  }
}
