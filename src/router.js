import Vue from 'vue'
import Router from 'vue-router'
import Cats from './views/Cats.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cats',
      name: 'cats',
      component: Cats
    },
    {
      path: '*',
      redirect: {
        name: 'cats'
      }
    }
  ]
})
