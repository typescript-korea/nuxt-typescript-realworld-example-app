const config = {

  srcDir: './src',

  rootDir: './',

  /**
   * index.html
   */
  head: {
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1"
      },
    ],
  /**
   * Webpack build
   */
  build: {
    cache: true,
    cssSourceMap: true,
    loaders: {
      ts: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly: true,
      },
      tsx: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly: true,
      },
      useForkTsChecker: true,
    },
    optimization: {
      splitChunks: {
        name: true,
      },
    },
  },

  watch: [
    '~/**/*.ts',
    '~/**/*.js',
    '~/**/*.vue',
    '~~/nuxt.config.js',
  ],

  /*
   ** Build configuration
   */
  modules: [
    'modules/typescript.js',
  ],
}

export default () => (config)
