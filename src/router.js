import Vue from 'vue'
import VueRouter from 'vue-router'

import More from './More.vue'
import Search from './Search.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/more', component: More },
  { path: '/search', component: Search },  
]

export default new VueRouter({
  routes // сокращение от `routes: routes`
})