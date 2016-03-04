/**
 * Created by Jared on 16/3/4.
 */

import {
  GET_ALL_WHITELIST,
} from '../mutation-types'

// initial state
const state = {
  whitelist:[]
}

// mutations
const mutations = {
  [GET_ALL_WHITELIST] (state, whitelist) {
    state.whitelist = whitelist
  }
}

export default {
  state,
  mutations
}
