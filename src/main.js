// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// MaterialDashboard plugin
import MaterialDashboard from './material-dashboard'

Vue.use(MaterialDashboard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
