<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/filelist">
        <md-icon>dashboard</md-icon>
        <p>File  list</p>
      </sidebar-link>
      <sidebar-link to="/about">
        <md-icon>person</md-icon>
        <p>about lambda</p>
      </sidebar-link>
      <sidebar-link to="/scenario">
        <md-icon>business</md-icon>
        <p>Application Scenario</p>
      </sidebar-link>
      <sidebar-link to="/whitepaper">
        <md-icon>book</md-icon>
        <p>Economic WhitePaper</p>
      </sidebar-link>
      <sidebar-link to="/token">
        <md-icon>attach_money</md-icon>
        <p> Economic System</p>
      </sidebar-link>
      <!-- <sidebar-link to="/">
        <md-icon>content_paste</md-icon>
        <p>PDP introduction</p>
      </sidebar-link>



      <sidebar-link to="/">
        <md-icon>content_paste</md-icon>
        <p>Storage node</p>
      </sidebar-link>
      <sidebar-link to="/">
        <md-icon>content_paste</md-icon>
        <p>Verification node</p>
      </sidebar-link> -->
      <sidebar-link to="/papers">
        <md-icon>find_in_page</md-icon>
        <p>Relevant papers</p>
      </sidebar-link>

      <!-- <sidebar-link to="/typography">
        <md-icon>library_books</md-icon>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>location_on</md-icon>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link>
      <sidebar-link to="/upgrade" class="active-pro">
        <md-icon>unarchive</md-icon>
        <p>Upgrade to PRO</p>
      </sidebar-link> -->
    </side-bar>

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
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
}
</script>
