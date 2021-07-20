<template>
  <div v-if="Object.keys(goods).length !==0" class="info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price"><span>{{goods.newPrice}}</span> <span>{{goods.oldPrice}}</span><span v-if="goods.discount">{{goods.discount}}</span></div>
    <div class="info-count"><div v-for='index in goods.columns.length-1'>{{goods.columns[index-1]}}</div><div>{{goods.services[0].name}}</div></div>    
    <div class="info-service"><div v-for="index in goods.services.length-1">
       <img :src="goods.services[index-1].icon" alt="">
      <span>{{goods.services[index].name}}</span>  
      </div></div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }

}
</script>

<style scoped>
.info{
  border-bottom: 5px solid #f2f5f8;
  margin:10px 10px;
  color: #999;
}
.info-title{
  font-weight:bold;
  margin-bottom: 10px;
  color: #222
 
}
.info-price :first-child{
  font-size: 24px;
  color: var(--color-tint);
}
.info-price :nth-child(2){
  text-decoration: line-through;
  color: var(--color-text);
  font-size: 13px;
}
.info-price :last-child{
  background-color: var(--color-high-text);
  border-radius: 8px;
  padding: 3px;
  color: white;
  font-size: 12px;
  position: relative;
  top:-8px;
  left: 5px;
}
.info-count{
  margin-top :15px;
  line-height: 30px;
  display: flex;
  justify-content:space-between;
  color: var(--color-text);
  font-size: 13px;
  
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-service{
  display: flex;
  justify-content:space-between;
  font-size: 14px; 
 line-height: 60px;
}
.info-service img{
  width: 14px;
   height: 14px;
    position: relative;
    top: 2px;
}
  .info-service span {
    font-size: 13px;
    color: #333;
  }
</style>