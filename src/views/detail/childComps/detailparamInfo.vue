<template>
  <div class="param-info" v-if="Object.keys(itemParam).length !==0">
     <table v-for="item in itemParam.sizes"  class="info-size">
       <tr v-for="tr in item">
         <td v-for="td in tr">{{td}}</td>
       </tr>
     </table>
     <table class="info-param">
       <tr v-for="item in itemParam.infos">
         <td class="info-param-key">{{item.key}}</td>
         <td class="param-value">{{item.value}}</td>
       </tr>
     </table>
     <div class="info-img" v-if="itemParam.image.length !== 0">
      <img :src="itemParam.image" alt="">
    </div>

  </div>
</template>

<script>
export default {
  props:{
    itemParam:{
      type:Object,
      default(){
        return {}
      }
    }
  }

}
</script>

<style scoped>
.param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }

  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .param-info table tr {
    height: 42px;
    
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .param-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }
</style>