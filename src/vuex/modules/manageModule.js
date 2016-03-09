/**
 * Created by Jared on 16/3/4.
 */
import {remove} from 'lodash/remove'
import {
  GET_MANAGE_WHITE,
  DEL_MANAGE_WHITE
} from '../mutation-types'

// initial state
const state = {
  manageWhite:[],

}

// mutations
const mutations = {
  [GET_MANAGE_WHITE] (state, whitelist) {
    state.manageWhite = whitelist
  },
  [DEL_MANAGE_WHITE] (state, id){
    state.manageWhite= remove(state.manageWhite, function (item) {
      return item.address_filtering_id == id
    })
  }
};


export default {
  state,
  mutations
}
