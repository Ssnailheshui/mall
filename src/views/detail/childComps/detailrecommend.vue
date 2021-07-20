<template>
   <div class="goods-list">
    <detailrecommenditem v-for="(item,index) in recommend" :gooditem="item" :key="index" class="item "></detailrecommenditem>
  </div>
</template>

<script>
import detailrecommenditem from './detailrecommenditem.vue'
export default {
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    detailrecommenditem
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