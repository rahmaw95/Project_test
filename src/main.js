import './assets/plugins/bootstrap/css/bootstrap.css'
import './assets/scss/main.css'
import './assets/plugins/font-awesome/font-awesome.min.css'
import 'bootstrap'
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'
import VueResource from 'vue-resource'
import store from './store'

global.jQuery = jQuery
Vue.use(VueResource)
Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  router, store,
  components: {App},
  template: '<App/>'
})
