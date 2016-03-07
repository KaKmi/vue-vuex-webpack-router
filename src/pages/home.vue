<template>
  <nav-Bar :show.sync="showNavBar" :is-home="isHome"></nav-Bar>
  <vueheader :title="title" @show-nav="showNav"></vueheader>
  <div class="taps-container">
    <tabs :tabs="tabs"></tabs>
  </div>
  <div class="panel-containder">
    <panel :groups="groups"
           @more-action-show="showActionSheet1">
    </panel>
    <actionsheet
      :show.sync="actionSheetShow"
      :menus="computerMenus"
      :actions="actionSheetActions"
    ></actionsheet>
  </div>

</template>

<script>
  import vueheader from '../components/header/index.vue'
  import {Actionsheet} from 'vue-weui';
  import tabs from '../components/Tabs/index'
  import panel from '../components/panel/index'
  import {getWhiteList} from '../vuex/action'
  import navBar from '../components/navbar/index'
  export default {

    vuex: {
      actions: {
        getWhiteList
      },
      state: {}
    },
    components: {vueheader, tabs, panel,Actionsheet,navBar},
    methods: {
      showActionSheet1(){
        this.actionSheetShow=true
      },
      showNav(){
        this.showNavBar = !this.showNavBar;
      }
    },
    events: {
      exchangeTab: function (menuID) {
        var that = this;
        this.tabs.forEach(function (tab) {
          tab.active = tab.id == menuID;

        })
        switch (menuID){
          case 1:
            that.computedList=that.shieldList;
            that.computerMenus =that.actionSheetMenus.whitelistmenu
                break;
          case 2:
            that.computedList =that.requestList;
            that.computerMenus =that.actionSheetMenus.requestmenu
                break;
          case 3:
            that.computedList =that.whiteList;
            that.computerMenus =that.actionSheetMenus.whitelistmenu
                break
        }
      }
    },
    data(){
      return {
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
            remove: '解除屏蔽',
            del: '删除记录'
          },
          requestmenu: {
            arrow: '通过请求',
            del: '删除记录'
          }
        },
        actionSheetActions: {
          action1: '取消'
        },
        whiteList:[
          {
            time:'今天 -2015年12月18日星期一',
            items:[{icon:'https://account-file.putaocdn.com/file/b3f626f09301616ea7fa2a239f171dac2e5944a9.png?x=0&y=0&w=180&h=180',ht:'Product Hunt',st:'souhu.com',id:1},
              {icon:'https://account-file.putaocdn.com/file/b3f626f09301616ea7fa2a239f171dac2e5944a9.png?x=0&y=0&w=180&h=180',ht:'Product Hunt',st:'souhu.com',id:2}]
          },
          {
            time:'今天 -2015年12月18日星期二',
            items:[{icon:'https://account-file.putaocdn.com/file/b3f626f09301616ea7fa2a239f171dac2e5944a9.png?x=0&y=0&w=180&h=180',ht:'Product Hunt',st:'souhu.com',id:3},
              {icon:'https://account-file.putaocdn.com/file/b3f626f09301616ea7fa2a239f171dac2e5944a9.png?x=0&y=0&w=180&h=180',ht:'Product Hunt',st:'souhu.com',id:4}]
          }
        ],
        requestList:[
          {
            time:'今天 -2015年12月18日星期三',
            items:[{icon:'https://account-file.putaocdn.com/file/b3f626f09301616ea7fa2a239f171dac2e5944a9.png?x=0&y=0&w=180&h=180',ht:'Product Hunt',st:'souhu.com',id:1},
              {icon:'https://account-file.putaocdn.com/file/b3f626f09301616ea7fa2a239f171dac2e5944a9.png?x=0&y=0&w=180&h=180',ht:'Product Hunt',st:'souhu.com',id:2}]
          },
          {
            time:'今天 -2015年12月18日星期四',
            items:[{icon:'https://account-file.putaocdn.com/file/b3f626f09301616ea7fa2a239f171dac2e5944a9.png?x=0&y=0&w=180&h=180',ht:'Product Hunt',st:'souhu.com',id:3},
              {icon:'https://account-file.putaocdn.com/file/b3f626f09301616ea7fa2a239f171dac2e5944a9.png?x=0&y=0&w=180&h=180',ht:'Product Hunt',st:'souhu.com',id:4}]
          }
        ],
        shieldList:[
          {
            time:'今天 -2015年12月18日星期三1',
            items:[{icon:'https://account-file.putaocdn.com/file/b3f626f09301616ea7fa2a239f171dac2e5944a9.png?x=0&y=0&w=180&h=180',ht:'Product Hunt',st:'souhu.com',id:1},
              {icon:'https://account-file.putaocdn.com/file/b3f626f09301616ea7fa2a239f171dac2e5944a9.png?x=0&y=0&w=180&h=180',ht:'Product Hunt',st:'souhu.com',id:2}]
          },
          {
            time:'今天 -2015年12月18日星期四1',
            items:[{icon:'https://account-file.putaocdn.com/file/b3f626f09301616ea7fa2a239f171dac2e5944a9.png?x=0&y=0&w=180&h=180',ht:'Product Hunt',st:'souhu.com',id:3},
              {icon:'https://account-file.putaocdn.com/file/b3f626f09301616ea7fa2a239f171dac2e5944a9.png?x=0&y=0&w=180&h=180',ht:'Product Hunt',st:'souhu.com',id:4}]
          }
        ],
        computedList:[],
        computerMenus:{}
      }
    },
    computed:{
      groups(){
        return this.computedList;
      },
      menus(){
        return this.computerMenus
      }
    },
    route: {
      data(transition){
        this.getWhiteList()
        this.computedList= this.shieldList;
        this.computerMenus=this.actionSheetMenus.whitelistmenu;
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
