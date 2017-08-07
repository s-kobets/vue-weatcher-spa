import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'

Vue.use(Vuex) 

const store = new Vuex.Store({
  state: {
    city: []
  },
  mutations: {
    ADD_CITY (state, payload) {
      state.city.push(payload.city)
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
