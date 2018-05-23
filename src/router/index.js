import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.page'
import Menu from '../pages/menu.page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:menu',
      component: Menu
    }
  ]
})
