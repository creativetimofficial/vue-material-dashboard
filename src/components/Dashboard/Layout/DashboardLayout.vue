<template>
  <div class="wrapper">
    <notifications></notifications>

    <side-bar :sidebar-item-color="sidebarBackground" :sidebar-background-image="sidebarBackgroundImage"></side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin :color.sync="sidebarBackground"
                    :image.sync="sidebarBackgroundImage">
      </fixed-plugin>

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
import DashboardContent from './Content.vue'
import ContentFooter from './ContentFooter.vue'
import FixedPlugin from './Extra/FixedPlugin.vue'

export default {
  components: {
    'top-navbar': TopNavbar,
    'dashboard-content': DashboardContent,
    'content-footer': ContentFooter,
    'fixed-plugin': FixedPlugin
  },
  data () {
    return {
      sidebarBackground: 'green',
      sidebarBackgroundImage: require('@/assets/img/sidebar-1.jpg')
    }
  },
}
</script>
