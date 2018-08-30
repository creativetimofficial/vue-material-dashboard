import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import TableList from '@/pages/TableList.vue'

// import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/PDPProfile.vue'
//
import Typography from '@/pages/Typography.vue'
import Icons from '@/pages/Icons.vue'
import Maps from '@/pages/Maps.vue'
// import Notifications from '@/pages/Notifications.vue'
import UpgradeToPRO from '@/pages/UpgradeToPRO.vue'

import Papers from '@/pages/Papers.vue'

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
      },
      {
        path: 'whitepaper',
        name: 'Download whitepaper',
        component: Maps

      },
      {
        path: 'token',
        name: 'Token Distribution',
        component: Typography
      },
      {
        path: 'papers',
        name: 'Relevant papers',
        component: Papers
      },
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



    ]
  }
]

export default routes
