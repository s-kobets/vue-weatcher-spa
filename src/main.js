import Vue from 'vue'

import App from './App.vue'
import store from './store/'
import router from './router'
import api from './assets/api'

new Vue({
  el: '#app',
  router,
  store,
  created: function(){
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // Текущие координаты.
        const lat = position.coords.latitude;
        const log = position.coords.longitude;
        const argument = {
          type: 'weather', 
          settings: `?lat=${lat}&lon=${log}`,
        }
        api.get(argument).then(result => {
          this.$store.dispatch('addCity', { city: result.response })
        })
      });
    }
  },

  render: h => h(App)
})
