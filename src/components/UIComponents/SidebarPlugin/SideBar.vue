<template>
  <div class="sidebar" :data-color="activeColor" :data-image="backgroundImage" :style="sidebarStyle">
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
      <ul class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <sidebar-link v-for="(link,index) in sidebarLinks"
                      :key="link.name + index"
                      :to="link.path"
                      :link="link">
        </sidebar-link>
      </ul>
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
    backgroundImage: {
      type: String,
      default: require('@/assets/img/sidebar-1.jpg')
    },
    imgLogo: {
      type: String,
      default: require('@/assets/img/vue-logo.png')
    },
    activeColor: {
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
          path: '/admin/dashboard'
        },
        {
          name: 'User Profile',
          icon: 'person',
          path: '/admin/user'
        },
        {
          name: 'Table List',
          icon: 'content_paste',
          path: '/admin/table'
        },
        {
          name: 'Typography',
          icon: 'library_books',
          path: '/admin/typography'
        },
        {
          name: 'Icons',
          icon: 'bubble_chart',
          path: '/admin/icons'
        },
        {
          name: 'Maps',
          icon: 'location_on',
          path: '/admin/maps'
        },
        {
          name: 'Notifications',
          icon: 'notifications',
          path: '/admin/notifications'
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
        backgroundImage: `url(${this.backgroundImage})`
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
