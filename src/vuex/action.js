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


//http://api-ptui-apps.ptdev.cn/ptxms/browser/myrequest/get?uid=1
export const getRequestList=({dispatch})=>{
  Vue.http.get(config.baseUrl+'/ptxms/browser/myrequest/get', {token:'1',uid:'1',limit:10}).then(
    function (resp) {
      //console.log(JSON.stringify(resp))
      if(resp.data.http_status_code==200){
        dispatch(types.GET_ALL_REQUESTLIST,resp.data.data)
      }else {

      }
    }, function (response) {

    });
}

//http://api-ptui-apps.ptdev.cn/ptxms/browser/whitelist/get?token=1&uid=1
export const getManageWhite=({dispatch})=>{
  Vue.http.get(config.baseUrl+'/ptxms/browser/whitelist/get', {token:'1',uid:'1',limit:10}).then(
    function (resp) {
      //console.log(JSON.stringify(resp))
      if(resp.data.http_status_code==200){
        dispatch(types.GET_MANAGE_WHITE,resp.data.data)
      }else {

      }
    }, function (response) {

    });
}

export const delManageWhite=({dispatch},id)=>{
//  /ptxms/browser/ whitelist /delete
  Vue.http.post(config.baseUrl+'/ptxms/browser/whitelist/delete', {token:'1',uid:'1',address_filtering_id:id}).then(
    function (resp) {
      //console.log(JSON.stringify(resp))
      if(resp.data.http_status_code==200){
        if(resp.data.isSuccess==true){
          dispatch(types.DEL_MANAGE_WHITE,id)
        }else{

        }
      }else {

      }
    }, function (response) {

    });
}

