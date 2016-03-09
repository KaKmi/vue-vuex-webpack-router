<template>
  <div class="wrapper">
    <pt-routerview></pt-routerview>
  </div>
</template>

<script>
import Vue from 'vue'
import vuerouter from 'vue-router'
import routeview from './route/index.vue'
import store from './vuex/store'
export default {
   components:{routeview},
   store

}
</script>

<style>
 @import "../node_modules/weui";
 /*@import "css/font-awesome.css";*/
 .wrapper{
   /*position: absolute;*/
   /*top: 0;*/
   /*bottom: 0;*/
   /*left: 0;*/
   /*right: 0;*/
   /*height: 100%;*/
   position: relative;
 }
</style>
