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
      path: '/condolencia/criar',
      name: 'CondolenceRegister',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CondolenceRegister.vue')
    },
    {
      path: '/condolencia/sucesso',
      name: 'CondolenceRegisterSuccess',
      component: () => import('./views/CondolenceRegisterSuccess.vue')
    },
    {
      path: '/condolencias',
      name: 'Condolences',
      component: () => import('./views/Condolences.vue')
    },
    { 
      path: "*",
      component: () => import('./views/PageNotFound.vue')
    }
  ]
})
