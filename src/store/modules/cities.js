import * as types from '../mutation-types';

const state = {
  list: [],
};

const mutations = {
  [types.ADD_CITY](state, payload) {
    state.list.push(payload.city);
  },

  [types.REMOVE_CITY](state, payload) {
    state.list = state.list.filter(city => city.id !== payload.id);
  },
};

export default {
  state,
  mutations,
};
