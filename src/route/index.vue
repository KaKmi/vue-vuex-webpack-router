<template>
    <router-view class="main-view" transition="test" transition-mode="out-in" keep-alive>

    </router-view>
</template>

<script>
  import Vue from 'vue'
  import routerView from 'vue-router'

  var RouterView = Vue.extend({
    components:{
      'router-view':routerView
    }
  })

  Vue.component('pt-routerview',RouterView);

  module.exports = RouterView;


</script>

<style>
  .main-view{
    overflow-x: hidden;
  }
  .test-transition {
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    opacity: 1;
    overflow: hidden;
  }

  .test-enter, .test-leave {
    opacity: 0;
  }



</style>
