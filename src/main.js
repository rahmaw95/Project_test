import './assets/plugins/bootstrap/css/bootstrap.css'
import './assets/scss/main.css'
import './assets/plugins/font-awesome/font-awesome.min.css'
import 'bootstrap'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import SocialSharing from 'vue-social-sharing'
import store from './store'
import vSelect from 'vue-select'
import jQuery from 'jquery'
import VueResource from 'vue-resource'

global.jQuery = jQuery
Vue.use(VueResource)
Vue.component('v-select', vSelect)
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/Project_test/images/loading.gif',
  loading: '/Project_test/images/loading.gif',
  attempt: 1
})

Vue.use(SocialSharing)

if (process.env.NODE_ENV !== 'production') {
  // require('vue-mock')
  Vue.config.devtools = true
}

export default new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
