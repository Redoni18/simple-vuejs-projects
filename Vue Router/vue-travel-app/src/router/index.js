import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store.js"
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () => import(/* webpackChunkName: 'DestinationDetails' */"../views/DestinationDetails.vue"),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () => import(/* webpackChunkName: 'ExperienceDetails' */"../views/ExperienceDetails.vue"),
      }
    ],

    beforeEnter: (to, from, next) =>{
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      )

      if(exists){
        next()
      }else{
        next({name: "notFound"})
      }
    }
  },
  {
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: 'User' */"../views/User.vue"),
    meta: {requiresAuth: true}
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: 'Login' */"../views/Login.vue"),
  },
  {
    path: "/404",
    alias: "/:catchAll(.*)",
    name: "notFound",
    component: () => import(/* webpackChunkName: 'NotFound' */"../views/NotFound.vue"),
  }
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#experience") {
          position.offset = { y: 120 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }

        return false;
      }
    }
  },
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    //login
    if(!store.user){
      next({
        name: 'login'
      })
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router;
