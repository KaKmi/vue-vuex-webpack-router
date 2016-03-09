/**
 * Created by Jared on 16/3/3.
 */
import * as types from './mutation-types'
import Vue from 'vue'
import config  from '../conf'
export const getWhiteList = ({ dispatch }) => {

    //todo get all data from server
  Vue.http.get(config.baseUrl+'/ptxms/browser/mywhitelistrecord/get', {token:'1',uid:'1',limit:10}).then(
    function (resp) {
    //console.log(JSON.stringify(resp))
      if(resp.data.http_status_code==200){
        dispatch(types.GET_ALL_WHITELIST,resp.data.data)
      }else {

      }
  }, function (response) {

  });

}


export const getBlackList=({dispatch}) =>{
  Vue.http.get(config.baseUrl+'/ptxms/browser/myblockrecord/get', {token:'1',uid:'1',limit:10}).then(
    function (resp) {
      //console.log(JSON.stringify(resp))
      if(resp.data.http_status_code==200){
        dispatch(types.GET_ALL_BLACKLIST,resp.data.data)
      }else {

      }
    }, function (response) {

    });
}



export const getRequestList=({dispatch})=>{
  Vue.http.get(config.baseUrl+'/ptxms/browser/myblockrecord/get', {token:'1',uid:'1',limit:10}).then(
    function (resp) {
      //console.log(JSON.stringify(resp))
      if(resp.data.http_status_code==200){
        dispatch(types.GET_ALL_REQUESTLIST,resp.data.data)
      }else {

      }
    }, function (response) {

    });
}

