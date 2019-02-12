<template lang="pug">
  nav.navbar.navbar-light
    .container
      nuxt-link.navbar-brand(to="/") {{ siteName }}
      ul.nav.navbar-nav.pull-xs-right
        li.nav-item
          nuxt-link.nav-link(to="/")
            span.content Home
        li.nav-item
          nuxt-link.nav-link(to="/post")
            i.ion-compose
              span.content New Post
        li.nav-item
          nuxt-link.nav-link(to="/settings")
            i.ion-gear-a
            span.content Settings
        li.nav-item
          nuxt-link.nav-link(to="/register")
            span.content Sign up

</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-ts'

@Component({})
export default class AppHeader extends Vue {
  @Prop() siteName: String
}
</script>

<style scoped lang="stylus">
  .content
    padding-left 5px
    padding-right 5px
</style>
