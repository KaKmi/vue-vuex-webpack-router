<template>
  <div>
    <nav-Bar :show.sync="showNavBar" :is-home="isHome"></nav-Bar>
    <vueheader :title="title" @show-nav="showNav"></vueheader>
    <div class="taps-container">
      <tabs :tabs="tabs" @exchange-tab="exchangeTab"></tabs>
    </div>
    <div class="panel-containder">
      <panel :groups="groups"
             @more-action-show="showActionSheet1">
      </panel>
      <actionsheet
        :show.sync="actionSheetShow"
        :menus="menus"
        :actions="actionSheetActions"
        @weui-menu-click="menuClick"
      ></actionsheet>
    </div>

  </div>


</template>

<script type="text/ecmascript-6">
  import vueheader from '../components/header/index.vue'
  import {Actionsheet} from 'vue-weui';
  import tabs from '../components/Tabs/index'
  import panel from '../components/panel/index'
  import {getWhiteList,getBlackList,getRequestList,delRecordWhite} from '../vuex/action'
  import navBar from '../components/navbar/index'
  import {commonWhite,commonBlack,commonRequest} from '../vuex/getters'
  import _ from 'lodash'
  export default {
    vuex: {
      actions: {
        getWhiteList,
        getBlackList,
        getRequestList,
        delRecordWhite
      },
      getters: {
        whiteList:commonWhite,
        blackList:commonBlack,
        requestList:commonRequest,
      }
    },
    components: {vueheader, tabs, panel,Actionsheet,navBar},
    methods: {
      showActionSheet1(payload){

        this.actionSheetShow=true
        this.todoId =payload;
      },
      showNav(){
        this.showNavBar = !this.showNavBar;
      },
      exchangeTab(menuID){
        var that = this;
//        Promise
        that.menuID= menuID;
        this.tabs.forEach(function (tab) {
          tab.active = tab.id == menuID;

        });
      },
      menuClick(key){
        var $ = this;
        switch (key){
          case 'remove_white':
            //todo add event_log
            console.log('menu_click'+key);
//            $.delRecordWhite($.todoId)
            break;
          case 'del_white':
            console.log('menu_click_'+key);
            $.delRecordWhite($.todoId)
            break;
          case 'arrow_request':
            console.log('menu_click'+key);
            break;
          case 'del_request':
            console.log('menu_click'+key);
            break;
          case 'remove_blick':
            console.log('menu_click'+key);
            break;
          case 'del_black':
            console.log('menu_click'+key);
            break;
        }
      }
    },
    data(){
      return {
        todoId:0,
        menuID:1,
        isHome:true,
        showNavBar:false,
        title: '概况',
        tabs: [
          {
            id: 1,
            title: '已屏蔽',
            active: true
          }, {
            id: 2,
            title: '请求',
            active: false
          }, {
            id: 3,
            title: '白名单',
            active: false
          }],
        actionSheetShow: false,
        actionSheetMenus: {
          whitelistmenu: {
            remove_white: '移除白名单',
            del_white: '删除记录'
          },

          requestmenu: {
            arrow_request: '解除屏蔽',
            del_request: '删除记录'
          },
          blacklistmenu:{
            remove_blick:'解除屏蔽',
            del_black:'删除记录'
          }
        },
        actionSheetActions: {
          action1: '取消'
        }
      }
    },
    computed:{
      groups(){


        switch (this.menuID){
          case 1:
            return this.blackList
            break;
          case 2:
            return this.requestList
            break;
          case 3:
            return this.whiteList
            break;
        }
      },
      menus(){
        switch (this.menuID){
          case 1:
            return this.actionSheetMenus.blacklistmenu
                break;
          case 2:
            return this.actionSheetMenus.requestmenu
            break;
          case 3:
            return this.actionSheetMenus.whitelistmenu
            break;
        }
      }
    },
    route: {
      data(transition){
        //todo add loading and promise an so on
        this.getWhiteList();
        this.getBlackList();
        this.getRequestList();
      }
    },
  }

</script>
<style>
  .taps-container {
    position: relative;
    margin-top: 50px;
  }

  .panel-containder {
    padding-top: 50px;
  }

</style>
