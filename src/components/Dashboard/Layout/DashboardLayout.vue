<template>
  <div class="wrapper">
    <side-bar>
      <!-- <mobile-menu slot="content"></mobile-menu> -->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <div class="content">
        <dashboard-content>

        </dashboard-content>
      </div>

      <!-- <content-footer></content-footer> -->
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import DashboardContent from './Content.vue'
export default {
  components: {
    TopNavbar,
    DashboardContent
  }
}
</script>
