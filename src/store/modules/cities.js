import * as types from '../mutation-types'
import * as actions from '../actions'
// import * as getters from '../getters'

const state = {
  cities: []
}

const mutations = {
    [types.ADD_CITY] (state, payload) {
        state.cities.push(payload.city)
    },
}

export default {
  state,
  // getters,
  actions,
  mutations
}