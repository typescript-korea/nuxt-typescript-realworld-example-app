<template lang="pug">
  .main
    nuxt
</template>

<script lang="ts">
import {capitalize} from 'lodash'
import {
  Component, Vue,
} from 'vue-ts'

@Component
export default class Layout extends Vue {
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
