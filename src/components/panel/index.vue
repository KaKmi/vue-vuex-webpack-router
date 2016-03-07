<template>

  <div class="weui_panel weui_panel_access" v-for="group in groups">
    <div class="weui_panel_hd">{{group.time}}</div>
    <div class="weui_panel_bd">
      <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg" v-for="item in group.items">
        <div class="weui_media_hd">
          <img class="weui_media_appmsg_thumb" :src="item.icon" alt="">
        </div>
        <div class="weui_media_bd">
          <h4 class="weui_media_title">{{item.ht}}</h4>
          <p class="weui_media_desc">{{item.st}}</p>
        </div>
        <span class="more-control" @click="handleClick(item.id)"><i class="fa fa-ellipsis-h more-control-btn"></i></span>
      </a>

    </div>
  </div>




</template>

<script>

  export default{
    props:{
      groups:{
        type:Array,
      },
      actionSheetShow:{
        type:Boolean
      },
      actionSheetMenus:{
        type:Object
      },
      actionSheetActions:{
        type:Object
      }
    },

    methods: {
      handleClick(payload){
        this.$dispatch('more-action-show',payload)
      },

//      handleMenuClick(key){
//        alert(`你点击了菜单【${key}】`);
//      },
//      handleActionClick(key){
//        alert('你点击了操作项，Actionsheet要关闭了');
//      }
    }
  }

</script>
<style>
  .weui_panel {
    margin-top: 0;
  }

  .weui_panel_hd {
    background-color: #f6f6f6;
    margin-top: 0;
  }

  .weui_panel_hd:after {
    display: none;
  }

  .weui_media_box .weui_media_title {
    max-width: 200px;

  }

  .more-control {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ddd;
    text-align: center;
  }

  .more-control .more-control-btn {
    margin-top: 8px;
    color: #fff;
  }
</style>
