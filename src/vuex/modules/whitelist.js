/**
 * Created by Jared on 16/3/4.
 */
import {remove} from 'lodash/remove'
import {
  GET_ALL_WHITELIST,
  GET_ALL_REQUESTLIST,
  GET_ALL_BLACKLIST,
  DEL_WHITE_RECORD
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
  [DEL_WHITE_RECORD] (state,recordId){

    state.wist= remove(state.wist, function (item) {
      return item.user_record_id == recordId
    })
  }
};


export default {
  state,
  mutations
}
