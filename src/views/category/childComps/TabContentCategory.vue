<template>
  <div class="tabcontent">
    <div  v-for="(item, index) in subcategories.list" :key="index" class="item">
      <a :href="item.link" >
        <img :src="item.image" alt="" class="itemimg">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    subcategories:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  

 
}
</script>

<style scoped>
.tabcontent{
  display: flex;
  flex-wrap: wrap;
  margin-left: 5px;
  margin-top: 25px;
  
}
.item{
  width: 30%;
  text-align: center;
  font-size: 12px;
  margin: 0px 7px 12px  0;
  
}
.itemimg{
  width: 80%;
}
  .item-text {
    margin-top: 10px;
  }
</style>