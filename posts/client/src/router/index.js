import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/posts/',
      name: 'Posts',
      component: () => import(/* webpackChunkName: 'DestinationDetails' */'../components/Posts.vue')
    }
  ]
})
