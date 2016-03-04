<template>
  <vueheader :title="title"></vueheader>
  <div class="taps-container">
    <tabs :tabs="tabs"  ></tabs>

  </div>
  <div class="panel-containder">
    <panel></panel>
  </div>

</template>

<script>
  import vueheader from '../components/header/index.vue'
  import tabs from '../components/Tabs/index'
  import panel from '../components/panel/index'
  import {getWhiteList} from '../vuex/action'
  export default {

    vuex:{
      state:{

      },
      actions:{
        getWhiteList
      }
    },
    components: {vueheader, tabs,panel},
    methods:{

    },
    events:{
      exchangeTab: function (menuID) {
        this.tabs.forEach(function (tab) {
           tab.active = tab.id == menuID;
        })
      }
    },
    data(){
      return {
        title: '概况',
        tabs: [{
          id:1,
          title: '已屏蔽',
          active:true
        }, {
          id:2,
          title: '请求',
          active:false
        }, {
          id:3,
          title: '白名单',
          active:false
        }],

        actionsheetShow: false,
        actionSheetMenus: {
          whitelistmenu:{
            remove: '解除屏蔽',
            del: '删除记录'
          },
          requestmenu:{
            arrow:'通过请求',
            del:'删除记录'
          }




        },
        actionSheetActions: {
          action1: '取消'
        }
      }
    },

    route:{
      data(transition){
        this.getWhiteList()
      }
    },
  }

</script>
<style>
  .taps-container {
    position: relative;
    margin-top: 50px;
  }
  .panel-containder{
    padding-top: 50px;
  }

</style>
