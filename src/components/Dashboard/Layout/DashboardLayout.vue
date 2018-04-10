<template>
  <div class="wrapper">
    <side-bar>
      <!-- <mobile-menu slot="content"></mobile-menu> -->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content>

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import DashboardContent from './Content.vue'
import ContentFooter from './ContentFooter.vue'
export default {
  components: {
    'top-navbar': TopNavbar,
    'dashboard-content': DashboardContent,
    'content-footer': ContentFooter
  }
}
</script>
