<template>
  <div class="bottom-bar">
    <div class="baritem-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
       <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
       <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="baritem-right">
      <div class="cart" @click='buybtn'>加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    buybtn(){
      this.$emit('butbtn')
    }
  },

}
</script>

<style>
.bottom-bar{
  position:fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  height: 58px;
  display: flex;
  text-align: center;
}
.baritem-left{
  display: flex;
  flex: 1;
 
}
.baritem-left >div{
  flex: 1
}
.baritem-left .text{
  font-size: 13px;
}
.baritem-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  margin: 10px auto 3px;
}
.baritem-left .service{
  background-position: 0 -54px;
}
.baritem-left .shop{
  background-position: 0 -98px;
}
.baritem-right{
  flex: 1;
  display: flex;
  font-size: 15px;
  color: #fff;
  
  line-height: 58px;
  align-items: center;
}
.baritem-right > div{
  flex: 1
}
.baritem-right .cart{
   background-color: #ffe817;
    color: #333;

}
.baritem-right .buy{
   background-color: #f69;
}

</style>