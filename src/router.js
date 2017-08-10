import Vue from 'vue'
import VueRouter from 'vue-router'

const Search = resolve => require(['./Search.vue'], resolve)
const More = resolve => require(['./More.vue'], resolve)

Vue.use(VueRouter)

const routes = [
  { path: '/more', component: More },
  { path: '/search', component: Search },  
]

export default new VueRouter({
  mode: 'history',  // убираем решетку в url
  routes, // сокращение от `routes: routes`
  linkActiveClass: 'is-active'  // класс для активного линка
})