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
      ></actionsheet>
    </div>

  </div>


</template>

<script type="text/ecmascript-6">
  import vueheader from '../components/header/index.vue'
  import {Actionsheet} from 'vue-weui';
  import tabs from '../components/Tabs/index'
  import panel from '../components/panel/index'
  import {getWhiteList,getBlackList,getRequestList} from '../vuex/action'
  import navBar from '../components/navbar/index'
  import _ from 'lodash'
  export default {
    vuex: {
      actions: {
        getWhiteList,
        getBlackList,
        getRequestList,
      },
      getters: {
        whiteList:({whitelist})=> whitelist.wist,
        blackList:({whitelist})=> whitelist.blackList,
        requestList:({whitelist})=> whitelist.requestList,
      }
    },
    components: {vueheader, tabs, panel,Actionsheet,navBar},
    methods: {
      showActionSheet1(){
        this.actionSheetShow=true
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
      }
    },
    data(){
      return {
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
            remove: '移除白名单',
            del: '删除记录'
          },

          requestmenu: {
            arrow: '解除屏蔽',
            del: '删除记录'
          },
          blacklistmenu:{
            remove:'解除屏蔽',
            del:'删除记录'
          }
        },
        actionSheetActions: {
          action1: '取消'
        }
      }
    },
    computed:{
      groups(){
        var list = []


        switch (this.menuID){
          case 1:
            if(this.blackList.length>0){

              var con=_.groupBy(this.blackList, function (item) {
                return  item.create_time
              })
              var keys = Object.keys(con)
              var item ={}
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var date = new Date(parseInt(key));
                var year = date.getFullYear();
                var month =date.getMonth();
                var day = date.getDate();

                item.time =year+'-'+month+'-'+day;
                item.items = con[key]

              }

              list.push(item)

            }

            return list
            break;
          case 2:
//            list[0].items=this.requestList
            if(this.requestList.length>0){

              var con=_.groupBy(this.requestList, function (item) {
                return  item.create_time
              })
              var keys = Object.keys(con)
              console.log(con)
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var date = new Date(parseInt(key));
                var year = date.getFullYear();
                var month =date.getMonth();
                var day = date.getDate();
                var item ={}
                item.time =year+'-'+month+'-'+day;
                item.items = con[key]
                list.push(item)

              }


            }
            return list
            break;
          case 3:
            if(this.whiteList.length>0){

              var con=_.groupBy(this.whiteList, function (item) {
                return  item.create_time
              })
              var keys = Object.keys(con)
              var item ={}
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var date = new Date(parseInt(key));
                var year = date.getFullYear();
                var month =date.getMonth();
                var day = date.getDate();

                item.time =year+'-'+month+'-'+day;
                item.items = con[key]

              }

              list.push(item)

            }
            return list
            break;
        }
//        var list = [{
//          time:'今天-2015年12月18日星期一',
//          items:[]
//        }]
//        list[0].items.push(this.whiteList)
//        return list;
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
