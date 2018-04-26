<template>
  <div class="sidebar" :data-color="sidebarItemColor" :data-image="sidebarBackgroundImage" :style="sidebarStyle">
    <div class="logo">
      <a href="#" class="simple-text logo-mini">
        <div class="logo-img">
            <img :src="imgLogo" alt="">
        </div>
      </a>

      <a href="#" class="simple-text logo-normal">
        {{title}}
      </a>
    </div>
    <div class="sidebar-wrapper">
      <mobile-menu></mobile-menu>
      <md-list class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <sidebar-link v-for="(link,index) in sidebarLinks"
                      :key="link.name + index"
                      :to="link.path"
                      :link="link">
        </sidebar-link>
      </md-list>
    </div>
  </div>
</template>
<script>
import SidebarLink from './SidebarLink.vue'
import MobileMenu from '@/components/Dashboard/Layout/MobileMenu.vue'

export default{
  components: {
    SidebarLink,
    'mobile-menu': MobileMenu
  },
  props: {
    title: {
      type: String,
      default: 'Vue MD'
    },
    sidebarBackgroundImage: {
      type: String,
      default: require('@/assets/img/sidebar-1.jpg')
    },
    imgLogo: {
      type: String,
      default: require('@/assets/img/vue-logo.png')
    },
    sidebarItemColor: {
      type: String,
      default: 'purple',
      validator: (value) => {
        let acceptedValues = ['', 'purple', 'blue', 'green', 'orange', 'red']
        return acceptedValues.indexOf(value) !== -1
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => [
        {
          name: 'Dashboard',
          icon: 'dashboard',
          path: '/dashboard'
        },
        {
          name: 'User Profile',
          icon: 'person',
          path: '/user'
        },
        {
          name: 'Table List',
          icon: 'content_paste',
          path: '/table'
        },
        {
          name: 'Typography',
          icon: 'library_books',
          path: '/typography'
        },
        {
          name: 'Icons',
          icon: 'bubble_chart',
          path: '/icons'
        },
        {
          name: 'Maps',
          icon: 'location_on',
          path: '/maps'
        },
        {
          name: 'Notifications',
          icon: 'notifications',
          path: '/notifications'
        }
      ]
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  provide () {
    return {
      autoClose: this.autoClose
    }
  },
  computed: {
    sidebarStyle () {
      return {
        backgroundImage: `url(${this.sidebarBackgroundImage})`
      }
    }
  }
}
</script>
<style>
  @media screen and (min-width: 991px) {
    .nav-mobile-menu{
      display: none;
    }
  }
</style>
