const config = {

  srcDir: './src',

  rootDir: './',

  /**
   * index.html
   */
  head: {
    title: "Conduit",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1"
      },
    ],
    link: [
      {
         rel: 'stylesheet',
         href: '//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
      },
      {
         rel: 'stylesheet',
         href: '//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic',
      },
      {
         rel: 'stylesheet',
         href: 'https://demo.productionready.io/main.css',
      },
    ]
  },

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
