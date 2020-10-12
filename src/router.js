import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CondolenceRegister from './views/CondolenceRegister.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/registrar-condolencia',
      name: 'CondolenceRegister',
      component: CondolenceRegister
    },
    {
      path: '/condolencia/:id',
      name: 'condolence',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Condolence.vue')
    }
  ]
})
