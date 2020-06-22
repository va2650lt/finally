import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import ClientAPIService from '@/services/ClientService'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$client_api = ClientAPIService

new Vue({
  render: h => h(App),
}).$mount('#app')



