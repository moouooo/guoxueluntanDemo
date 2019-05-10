import Vue from "vue";
import Router from "vue-router";
// import Mine from "./views/mine"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("./views/home.vue")
    },
    {
      path: "/classify",
      name: "classify",
      component: () => import("./views/classify.vue")
    },
    {
      path: "/message",
      name: "message",
      component: () => import("./views/message.vue")
    },
    {
      path: "/mine",
      name: "mine",
      component: () => import("./views/mine.vue")
      // component:Mine
    },
    {
      path: "/new",
      name: "new",
      component: () => import("./views/new.vue")
      // component:Mine
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login.vue")
      // component:Mine
    },
    {
      path: "/topic/:category",
      name: "topic",
      component: () => import("./views/index.vue")
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
