<template>
    <div class="titlebar titlebar-normal titlebar-fixed">
      <a class="titlebar-cate-left" href="javascript:;"><i class="fa fa-angle-left bars"></i></a>
      <div class="titlebar-title"><span>{{title}}</span></div>
      <a class="titlebar-cate-right" href="javascript:;"><i class="fa fa-bars bars"></i></a>
    </div>
</template>

<script>
  export default{
    props:['title'],
  }

</script>
<style>
  .titlebar{

  }
  .titlebar .bars{
    font-size: 24px;
    margin-top: 6px;
    color: #a96ed5;

  }
  .titlebar-normal{
    position: relative;
    width: 100%;
    height: 50px;
    font-size: 18px;
    z-index: 1;
    background: #fff;
  }
  .titlebar-fixed{
    position: fixed;
    top:0;
  }

  .titlebar-normal .titlebar-cate-left {
    position: absolute;
    width: 36px;
    height: 36px;
    line-height: 1;
    left: 12px;
    top: 6px;
    text-align: center;
    /*background: url(//m.baidu.com/static/search/myweb/components/category.png) center center no-repeat;*/
    /*background-size: 24px 24px;*/
  }
  .titlebar-normal .titlebar-cate-right{
    position: absolute;
    width: 36px;
    height: 36px;
    line-height: 1;
    right: 12px;
    top: 6px;
    text-align: center;
  }
  .titlebar-normal .titlebar-title {
    text-align: center;
    height: 100%;
    line-height: 3pc;
    padding: 0 90px;
    white-space: nowrap;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
  }
   .main-logo {
    position: absolute;
    top: 13px;
    left: 50%;
    margin-left: -5pc;
    width: 10pc;
    height: 22px;
  }
  .titlebar-normal:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #ccc;
    -webkit-transform: scaleY(.5);
  }
  .titlebar-normal .titlebar-back, .titlebar-normal .titlebar-btn>a {
    height: 36px;
    line-height: 36px;
    background: url(//m.baidu.com/static/search/myweb/components/titlebar.png) no-repeat;
    background-size: 50px auto;
    overflow: hidden;
  }
  .titlebar-normal .titlebar-btn {
    position: absolute;
    top: 6px;
    right: 6px;
  }
  .titlebar-normal .titlebar-btn .titlebar-cart {
    background-position: 6px -193px;
    position: relative;
  }
  .titlebar-normal .titlebar-btn .titlebar-cart span {
    display: block;
    height: 14px;
    line-height: 14px;
    background-color: #ff505a;
    margin: auto;
    position: absolute;
    border-radius: 7px;
    font-size: 8px;
    padding: 0 4px;
    top: 4px;
    right: 0;
    color: #fff;
  }
  .titlebar-normal .titlebar-btn .titlebar-center {
    background-position: 8px -92px;
  }
</style>
