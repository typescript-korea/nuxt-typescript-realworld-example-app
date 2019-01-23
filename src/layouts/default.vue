<template lang="pug">
  div
    app-header(:site-name="siteName")
    nuxt
    app-footer(:site-name="siteName")
</template>

<script lang="ts">
import {capitalize} from 'lodash'
import {
  Component, Vue,
} from 'vue-ts'
import AppHeader from '@/components/appHeader.vue'
import AppFooter from '@/components/appFooter.vue'

@Component({
  components: {
    AppHeader,
    AppFooter,
  }
})
export default class Layout extends Vue {
  siteName: string = 'conduit'

  head() {
    let title = this.$route.name
    title = title === 'index' ? 'main' : title
    return {
      title: capitalize(title),
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
