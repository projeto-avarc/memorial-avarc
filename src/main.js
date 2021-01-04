import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import axios from "axios"
import Vuelidate from "vuelidate"
import { VueMaskDirective } from "v-mask"
import VueSocialSharing from 'vue-social-sharing'
import Paginate from 'vuejs-paginate'

// css imports
import "@/assets/css/tailwind.scss"
import "@/assets/css/base.scss"

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.directive("mask", VueMaskDirective)
Vue.use(VueSocialSharing)
Vue.component('paginate', Paginate)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
