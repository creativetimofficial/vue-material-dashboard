import './docs.scss'
import '../../node_modules/vue-material/dist/vue-material.css'
import '@/assets/scss/material-dashboard.scss'
import DemoBlock from './demo-block/demo-block'
// Plugins
import GlobalComponents from '@/globalComponents'
import GlobalDirectives from '@/globalDirectives'
import Notifications from '@/components/NotificationPlugin'
// MaterialDashboard plugin
import VueMaterial from '../../node_modules/vue-material'
import * as components from '@/components/index';

export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData
                }) => {
  Vue.use(VueMaterial)
  Vue.use(GlobalComponents);
  Vue.use(GlobalDirectives);
  Vue.use(Notifications);
  Vue.component('demo-block', DemoBlock);
  Object.keys(components).forEach(compKey => {
    let componentInstance = components[compKey];
    if(componentInstance.name){
      Vue.component(componentInstance.name, componentInstance);
    }
  });
}
