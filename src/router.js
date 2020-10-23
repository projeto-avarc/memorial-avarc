import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      path: '/criar-condolencia',
      name: 'CondolenceRegister',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CondolenceRegister.vue')
    },
    {
      path: '/register-success',
      name: 'CondolenceRegisterSuccess',
      component: () => import('./views/CondolenceRegisterSuccess.vue')
    },
    {
      path: '/condolencia/:id',
      name: 'Condolence',
      component: () => import('./views/Condolence.vue')
    },
    { 
      path: "*",
      component: () => import('./views/PageNotFound.vue')
    }
  ]
})
