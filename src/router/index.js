import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/components/Dashboard/Layout/DashboardLayout.vue'

import Dashboard from '@/components/Dashboard/Views/Dashboard.vue'
import UserProfile from '@/components/Dashboard/Views/UserProfile.vue'
import TableList from '@/components/Dashboard/Views/TableList.vue'
import Typography from '@/components/Dashboard/Views/Typography.vue'
import Icons from '@/components/Dashboard/Views/Icons.vue'
import Maps from '@/components/Dashboard/Views/Maps.vue'
import Notifications from '@/components/Dashboard/Views/Notifications.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      redirect: '/admin/dashboard'
    },
    {
      path: '/admin',
      component: DashboardLayout,
      redirect: '/admin/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'user',
          name: 'User Profile',
          component: UserProfile
        },
        {
          path: 'table',
          name: 'Table List',
          component: TableList
        },
        {
          path: 'typography',
          name: 'Typography',
          component: Typography
        },
        {
          path: 'icons',
          name: 'Icons',
          component: Icons
        },
        {
          path: 'maps',
          name: 'Maps',
          component: Maps
        },
        {
          path: 'notifications',
          name: 'Notifications',
          component: Notifications
        }
      ]
    }
  ],
  linkExactActiveClass: 'nav-item active'
})
