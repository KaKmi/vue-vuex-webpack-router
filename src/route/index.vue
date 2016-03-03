<template>
    <router-view class="main-view" transition="test" transition-mode="out-in" keep-alive></router-view>
</template>

<script>
  import Vue from 'vue'
  import vuerouter from 'vue-router'

  var RouterView = Vue.extend({
    components:{
      'router-view':vuerouter
    }
  })
  Vue.component('router-view',RouterView)
  export default RouterView
</script>

<style>
  .main-view{

    overflow-x: hidden;
  }
  .test-transition {
    transition: all .3s ease;
    opacity: 1;
    overflow: hidden;
  }

  .test-enter, .test-leave {
    opacity: 0;
  }
</style>
