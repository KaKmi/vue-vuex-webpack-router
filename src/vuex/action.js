/**
 * Created by Jared on 16/3/3.
 */
import * as types from './mutation-types'
import Vue from 'vue'
import config  from '../conf'
export const getWhiteList = ({ dispatch }) => {

    //todo get all data from server
  Vue.http.get(config.baseUrl+'/ptxms/browser/whitelist/get', {token:'1',uid:'1',limit:10}).then(function (response) {
    console.log(JSON.stringify(response))
  }, function (response) {

  });
    dispatch(types.GET_ALL_WHITELIST,[])
}

