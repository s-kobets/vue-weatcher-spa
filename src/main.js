import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'

Vue.use(Vuex) 

const store = new Vuex.Store({
  state: {
    citys: []
  },

  actions: {
      addCity({commit}, payload) {
          commit('ADD_CITY', payload)
      },
  },

  mutations: {
    ADD_CITY (state, payload) {
      state.citys.push(payload.city)
    },
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
