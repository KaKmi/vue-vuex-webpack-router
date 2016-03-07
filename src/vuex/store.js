/**
 * Created by Jared on 16/3/3.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import whitelist from './modules/whitelist'
import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug =true


const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
  modules:{
    whitelist
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
