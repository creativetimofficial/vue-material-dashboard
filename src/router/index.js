import Vue from 'vue'
import Router from 'vue-router'
import SideBar from '@/components/UIComponents/SidebarPlugin/SideBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sidebar',
      component: SideBar
    }
  ]
})
