import Vue from 'vue';
import Vuex from 'vuex';
import cities from './modules/cities';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cities,
  },
  actions,
  getters,
});
