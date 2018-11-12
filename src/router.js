import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/Layout.vue";
import Home from "./views/Home.vue";
import Sexz from "./views/Sexz.vue";
import Fortune from "./views/Fortune.vue";
import Masters from "./views/Masters.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/",
      name: "layout",
      component: Layout,
      children: [
        {
          path: "/sexz",
          name: "sexz",
          component: Sexz
        },
        {
          path: "/fortune",
          name: "fortune",
          component: Fortune
        },
        {
          path: "/masters",
          name: "masters",
          component: Masters
        },
        {
          path: "/home",
          name: "home",
          component: Home
        }
      ]
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
