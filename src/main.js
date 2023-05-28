import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
//import VueSocketIO from 'vue-socket.io';

import { BootstrapVue, IconsPlugin, BootstrapVueIcons  } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueSimpleAlert from 'vue-simple-alert'

Vue.use(VueSimpleAlert)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
/*
Vue.use(new VueSocketIO({
  debug: false,
  connection: 'ws://127.0.0.1:8001',
  vuex: {
      store,
      actionPrefix: 'socket_',
  }
}));
*/

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
