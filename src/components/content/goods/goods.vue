<template>
  <div class="goods-list">
    <goodsitems v-for="(item,index) in goods" :gooditem="item" :key="index" class="item "></goodsitems>
  </div>
 
</template>

<script>
import goodsitems from './goodsitems.vue'
export default {
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    goodsitems
    
  }

}
</script>

<style scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-around;
  }

  .goods-list .item {
    width: 48%;
  }
</style>