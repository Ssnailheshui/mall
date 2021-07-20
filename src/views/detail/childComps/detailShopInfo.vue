<template>
  <div class="shopInfo">
    <div class="shop-tit">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="gleft">
        <div class="gsells">
          <div>{{shopInfo.sells | sellCountFilter}}</div>
          <div>总销量</div>
        </div>
        <div class="gsells">
          <div>{{shopInfo.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="gright">
        <table>
          <tr v-for="item in shopInfo.score" class="evaluate"> 
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td  class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    shopInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
   filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    }

}
</script>

<style scoped>
.shopInfo{
  margin: 10px;
  padding:15px 0;
  border-bottom: 5px solid #f2f5f8;
}
.shop-tit{
  line-height: 50px;
  display: flex;
  align-items: center;
 
}
.shop-tit img{
  width: 50px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.1);
}
.shop-tit span{
  margin-left: 10px;
  
}
.shop-middle{
  display: flex;
  margin-top:20px
  
}
.gleft{
  width: 50%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-right: 1px solid #ccc;
  align-items: center;
}
.gright{
  width: 50%;
  padding-left:20px;
}
.gsells :first-child{
  font-size: 20px;
  font-weight: bold;

}
.gsells :last-child{
  font-size: 14px;
}

.evaluate  td{
  padding:5px 7px;
  
}
.evaluate .score{
    color: #5ea732;
}
.evaluate .better span{
  background-color: #5ea732;
  color: #fff;
}
.evaluate .score-better{
  color: #f13e3a;
}
.evaluate .better-more span{
  background-color: #f13e3a;
}
.shop-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>