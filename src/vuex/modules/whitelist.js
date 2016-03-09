/**
 * Created by Jared on 16/3/4.
 */

import {
  GET_ALL_WHITELIST,
  GET_ALL_REQUESTLIST,
  GET_ALL_BLACKLIST
} from '../mutation-types'

// initial state
const state = {
  wist:[],
  blackList:[],
  requestList:[]
}

// mutations
const mutations = {
  [GET_ALL_WHITELIST] (state, whitelist) {
    state.wist = whitelist
  },
  [GET_ALL_REQUESTLIST] (state, requestlist) {
    state.requestList = requestlist
  },
  [GET_ALL_BLACKLIST] (state, blacklist) {
    state.blackList = blacklist
  },
};


export default {
  state,
  mutations
}
