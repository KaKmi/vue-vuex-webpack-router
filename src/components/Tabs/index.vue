<template>
  <div class="weui_navbar">

    <div class="weui_navbar_item "  v-bind:class="tab.active?'weui_bar_item_on':''"  v-for="tab in tabs" @click="dispatchEvent('exchange-tab',tab.id)">
        {{tab.title}}
    </div>
    <!--<div class="weui_navbar_item weui_bar_item_on">-->
      <!--已屏蔽-->
    <!--</div>-->

  </div>

</template>

<script>
  export default{
    props:['tabs'],
    methods:{
      dispatchEvent(event, payload) {
        this.$dispatch(event, payload);

//        if (event === 'weui-action-click') {
//          this.hideActionSheet();
//        }
      },
    }
  }

</script>
<style>
  .weui_bar_item_on:before{
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    border-bottom: 2px solid #9a5bcd;
    color: #BCBAB6;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    z-index:1;
  }

</style>
