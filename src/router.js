import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "layouts" */ "@/layouts/Main.vue"),
        children: [
          {
            path: "/condolencia/sucesso",
            name: "CondolenceRegisterSuccess",
            component: () => import("./views/CondolenceRegisterSuccess.vue"),
          },
          // {
          //   path: "/",
          //   name: "Home",
          //   component: Home,
          // },
          {
            path: "/condolencias",
            name: "Condolences",
            component: () => import("./views/Condolences.vue"),
          },
          {
            path: "/condolencia/criar",
            name: "CondolenceRegister",
            component: () =>
              import(
                "./views/CondolenceRegister.vue"
              ),
          },
        ],
    },
    {
      path: "/condolencia/:id",
      name: "Condolence",
      component: () => import("./layouts/Condolence.vue"),
    },
  ],
});
