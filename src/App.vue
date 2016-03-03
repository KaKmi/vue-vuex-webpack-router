<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import vuerouter from 'vue-router'
import routeview from './route/index.vue'

export default {
   components:{routeview}
}
</script>

<style>
 @import "../node_modules/weui";
 .wrapper{
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   height: 100%;
 }
</style>
