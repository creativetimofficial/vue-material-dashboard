import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import TableList from '@/pages/TableList.vue'

// import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/PDPProfile.vue'
//
// import Typography from '@/pages/Typography.vue'
import Icons from '@/pages/Icons.vue'
// import Maps from '@/pages/Maps.vue'
// import Notifications from '@/pages/Notifications.vue'
import UpgradeToPRO from '@/pages/UpgradeToPRO.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/filelist',
    children: [
      {
        path: 'filelist',
        name: 'File List',
        component: TableList
      },
      {
        path: 'pdpdetails/:fileid',
        name: 'PDP details',
        component: UserProfile
      },
      {
        path: 'about',
        name: 'About Lambda',
        component: UpgradeToPRO
      },
      {
        path: 'scenario',
        name: 'Application Scenario',
        component: Icons
      }
      // {
      //   path: 'dashboard',
      //   name: 'Dashboard',
      //   component: Dashboard
      // },

      //
      // {
      //   path: 'typography',
      //   name: 'Typography',
      //   component: Typography
      // },

      // {
      //   path: 'maps',
      //   name: 'Maps',
      //   meta: {
      //     hideFooter: true
      //   },
      //   component: Maps
      //
      // },
      // {
      //   path: 'notifications',
      //   name: 'Notifications',
      //   component: Notifications
      // },

    ]
  }
]

export default routes
