<template lang="pug">
  footer
    .container
      nuxt-link.logo-font(to="/") {{ siteName }}
      span.attribution
        | An interactive learning project from 
        | <a href="https://thinkster.io">Thinkster</a>.
        | Code &amp; design licensed under MIT.
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'

@Component({})
export default class AppFooter extends Vue {
  @Prop() siteName: String
}
</script>

<style scoped lang="stylus">
</style>
