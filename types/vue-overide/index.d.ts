import {RootState} from 'project/store'
import {Vue} from 'vue/types/vue'
import {Route} from 'vue-router'
import {VueRouter} from 'vue-router/types/router'
import {Store} from 'vuex'

declare module '*.vue' {
  const content: any
  export default content
}

declare module 'vue/types/vue' {
  interface Vue {
    readonly $route: Route
    readonly $router: VueRouter
    readonly $store: Store<RootState>
  }

  interface VueConstructor{
  }
}

declare module 'vue/types/options' {
  // noinspection TsLint
  interface ComponentOptions<V extends Vue> {
  }
}
