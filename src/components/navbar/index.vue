<template>
  <div class="navBar-container " :class="{'navBar-container-toggle': show}">
     <ul class="navBar">
       <li class="navBar-item" :class="{'active': isHome}" @click="toggleNav" ><a v-link="{name:'home'}"  href="javascript:;">概况</a></li>
       <li class="navBar-item" :class="{'active': isResolve}" @click="toggleNav"><a v-link="{name:'resolve'}" href="javascript:;">内容过滤</a></li>
       <li class="navBar-item" :class="{'active': isReject}" @click="toggleNav"><a v-link="{name:'reject'}" href="javascript:;">屏蔽反馈</a></li>
     </ul>
  </div>

</template>

<script>
  export default{
      props:{
        show:{
          type:Boolean,
          required:true,
          twoWay: true
        },
        isHome:{
          type:Boolean,
          default:false
        },
        isResolve:{
          type:Boolean,
          default:false
        },
        isReject:{
          type:Boolean,
          default:false
        }

      },
    methods:{
      toggleNav(){
        this.show=false
      }
    }
  }

</script>
<style>
  .navBar-container{
    position: fixed;
    background-color: #fff;
    left: 0;
    top: 50px;
    right: 0;
    opacity: 0;
    width: 100%;
    bottom: 0;
    z-index:1;
    -webkit-transform: translate(0, -100%);
    transform: translate(0, -100%);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;

  }
  .navBar-container.navBar-container-toggle{
    transform: translate(0,0);
    opacity: 1;
    z-index: 2;
  }
  .navBar{
    list-style: none;
    position: absolute;
    width: 240px;
    margin: 0 auto;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
  .navBar .navBar-item{
    color: #333;
    text-align: center;
    padding: 25px 0;
    position: relative;

  }
  .navBar .navBar-item a{
    color: #333;
  }
  .navBar .navBar-item.active a{
    color: #9a5bcd;
  }
  .navBar .navBar-item:first-child:after{
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #ccc;
    -webkit-transform: scaleY(.5);
    left: 0;
    right: 0;
  }
  .navBar .navBar-item:last-child:before{
    content: '';
    position: absolute;
    width: 100%;
    top:0;
    height: 1px;
    background: #ccc;
    -webkit-transform: scaleY(.5);
    left: 0;
    right: 0;
  }


</style>
