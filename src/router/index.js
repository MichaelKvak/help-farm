import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/main.vue"),
  },
  {
    path: "/final",
    name: "Final",
    component: () => import("../views/final.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
