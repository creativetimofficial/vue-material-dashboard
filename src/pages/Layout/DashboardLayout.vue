<template>
  <div class="wrapper">
    <notifications></notifications>

    <side-bar></side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content>

      </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'

export default {
  components: {
    'top-navbar': TopNavbar,
    'dashboard-content': DashboardContent,
    'content-footer': ContentFooter
  }
}
</script>
