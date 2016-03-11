<template>
  <ul>
    <li class="category">
      <a href="#sq" data-toggle="collapse" class="category-title" aria-expanded="false"><i class="fa fa-angle-down"></i>
        <span>色情</span></a>
      <ul id="sq" class="collapse">
        <li class="category-subdivision">语言暴力</li>
        <li class="category-subdivision">视觉暴力</li>
        <li class="category-subdivision">语言暴力</li>
        <li class="category-subdivision">视觉暴力</li>
      </ul>
    </li>
    <li class="category">
      <a href="#zhengzhi" data-toggle="collapse" class="category-title" aria-expanded="false"><i
        class="fa fa-angle-down"></i> <span>色情</span></a>
      <ul id="zhengzhi" class="collapse">
        <li class="category-subdivision">语言暴力</li>
        <li class="category-subdivision">视觉暴力</li>
        <li class="category-subdivision">语言暴力</li>
        <li class="category-subdivision">视觉暴力</li>
      </ul>
    </li>
    <li class="category">
      <a href="#youxi" data-toggle="collapse" class="category-title" aria-expanded="false"><i
        class="fa fa-angle-down"></i> <span>色情</span></a>
      <ul id="youxi" class="collapse">
        <li class="category-subdivision">语言暴力</li>
        <li class="category-subdivision">视觉暴力</li>
        <li class="category-subdivision">语言暴力</li>
        <li class="category-subdivision">视觉暴力</li>
      </ul>
    </li>
  </ul>

</template>

<script>
  import './trasnstion'
  import './collapse'

  export default{
    created(){
      //todo

    }
  }

</script>
<style>
  .collapse {
    display: none;
  }

  .collapse.in {
    display: block;
  }

  .collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    -webkit-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
    -webkit-transition-duration: .35s;
    -o-transition-duration: .35s;
    transition-duration: .35s;
    -webkit-transition-property: height, visibility;
    -o-transition-property: height, visibility;
    transition-property: height, visibility
  }

  .category {
    padding: 10px;
    position: relative;
  }

  .category-title {
    color: #333;
  }

  .category:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }

  .category-subdivision {
    padding: 10px 20px;
  }
</style>
