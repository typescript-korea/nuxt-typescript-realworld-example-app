import Vue from 'vue'
import Component from 'vue-class-component'
export {Emit, Inject, Mixins, Model, Prop, Provide, Watch} from 'vue-property-decorator'
export {namespace, State, Mutation, Action, Getter} from 'vuex-class'
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'asyncData',
  'fetch',
  'head',
  'middleware',
  'layout',
  'transition',
  'scrollToTop',
  'validate',
])
export {
  Component,
  Vue,
}
