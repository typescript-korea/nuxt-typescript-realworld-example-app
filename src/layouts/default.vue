<template lang="pug">
  div
    app-header(:site-name="siteName")
    nuxt
    app-footer(:site-name="siteName")
</template>

<script lang="ts">
import {
  Component, Vue,
} from 'nuxt-property-decorator'
import AppHeader from '../components/appHeader.vue';
import AppFooter from '../components/appFooter.vue';

@Component({
  components: {
    AppHeader,
    AppFooter,
  }
})
export default class extends Vue {
  siteName: string = 'conduit'
}
</script>

<style scoped lang="stylus">
</style>
