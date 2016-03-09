<template>
  <div class="weui_cells weui_cells_radio" @click="dispatchEvent">

    <label class="weui_cell weui_check_label" v-for="item in whiteList" >
        <div class="weui_cell_bd weui_cell_primary">
          <p>{{item.url_address}}</p>
        </div>
      <div class="weui_cell_ft">
        <span class="weui_icon_cancel" data-id="{{item.address_filtering_id}}"></span>
      </div>
    </label>


  </div>
</template>

<script>
    export default{
      props:{
        whiteList:{
          types:Array,
        }
      },
      methods:{
        dispatchEvent(e){
          this.$dispatch('del-white-item',e)
        }
      }
    }
</script>
<style>
  .weui_cell{
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .weui_icon_cancel:before {
    color: #A96ED5;
    font-size: 22px;
  }

</style>
