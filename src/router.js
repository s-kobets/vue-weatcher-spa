import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = resolve => require(['./Home.vue'], resolve);
const Search = resolve => require(['./Search.vue'], resolve);

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
];

export default new VueRouter({
  mode: 'history', // убираем решетку в url
  routes, // сокращение от `routes: routes`
  linkActiveClass: 'is-active', // класс для активного линка
});
