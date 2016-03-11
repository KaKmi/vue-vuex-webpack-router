<template>

  <div>
    <nav-Bar :show.sync="showNavBar" :is-resolve="isResolve"></nav-Bar>
    <vueheader :title="title" @show-nav="showNav"></vueheader>
    <div class="taps-container">
      <tabs :tabs="tabs" @exchange-tab="exchangeTab"></tabs>
    </div>
    <div class="panel-containder">
      <white-list :white-list="whiteGroup"
                  @del-white-item="delItem">

      </white-list>
      <collapse-list>

      </collapse-list>
    </div>
  </div>


</template>

<script type="text/ecmascript-6">
  import vueheader from '../components/header/index.vue'
  import {Actionsheet} from 'vue-weui';
  import tabs from '../components/Tabs/index'
  import {getManageWhite,delManageWhite} from '../vuex/action'
  import navBar from '../components/navbar/index'
  import whiteList from '../components/cells/whiteList.vue'
  import collapseList from '../components/collapseList/collapseList.vue'

  export default {

    vuex: {
      actions: {
        getManageWhite,
        delManageWhite
      },
      getters: {
        manageWhite:({manageModule})=> manageModule.manageWhite
      }
    },
    components: {vueheader, tabs,navBar,whiteList,collapseList},
    methods: {
      showActionSheet1(){
        this.actionSheetShow=true
      },
      showNav(){
        this.showNavBar = !this.showNavBar;
      },
      exchangeTab(menuID){
        var that = this;
        this.menuID=menuID;
        this.tabs.forEach(function (tab) {
          tab.active = tab.id == menuID;

        })
      },
      delItem(e){
        if(e.target.dataset.id!=null && typeof e.target.dataset.id !=void 0){
//          alert(e.target.dataset.id)
          delManageWhite(e.target.dataset.id)
        }
      }
    },

    data(){
      return {
        menuID:4,
        isResolve:true,
        showNavBar:false,
        title: ' 内容过滤',
        tabs: [
          {
            id: 1,
            title: '分类过滤',
            active: false
          }, {
            id: 2,
            title: '搜索过滤',
            active: false
          }, {
            id: 3,
            title: '黑名单',
            active: false
          },{
            id: 4,
            title: '白名单',
            active: true
          }],

      }
    },
    computed:{
      whiteGroup(){
        return this.manageWhite
      }
    },
    route: {
      data(transition){
        if(this.whiteGroup.length==0){
          this.getManageWhite()
        }
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
