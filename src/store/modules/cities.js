import * as types from '../mutation-types'
import * as actions from '../actions'
// import * as getters from '../getters'

const state = {
  list: []
}

const mutations = {
    [types.ADD_CITY] (state, payload) {
        state.list.push(payload.city)
    },
}

export default {
  state,
  // getters,
  actions,
  mutations
}