<template>
  <div class="bottom-menu">
    <check-buttom class="select-all" @checkBtnClick='checkBtnClick' v-model="seletedAll"></check-buttom>
    <span>全选</span>
    <span class="total-price">合计：￥{{totalPrice}}</span>
    <span class="buy-product">去计算({{cartLength}})</span>
  </div>
</template>

<script>
import CheckButtom from './CheckButtom.vue'
export default {
  components:{
    CheckButtom
  },
  computed:{
    itemcount(){
      return this.$store.state.cartlist.length
    },
    cartlist(){
      return this.$store.state.cartlist
    },
    totalPrice(){
      const cartList=this.cartlist;
      return cartList.filter( item =>{
        return item.check
      }).reduce((prevalue,item) =>{
        return prevalue + item.count * item.price
      },0).toFixed(2)
    },
    cartLength(){
       const cartList=this.cartlist;
       return cartList.filter (item =>{
         return item.check
       }).reduce((prevalue,item) =>{
         return prevalue +item.count
       },0)
    },
    seletedAll(){
      const cartList=this.cartlist;
      return cartList.find(item => item.check === false) === undefined;
      
    }
  },
  methods: {
    checkBtnClick(){
      
      let isSelectAll =this.cartlist.find(item => !item.check)
      if(isSelectAll){
        this.$store.state.cartlist.forEach(item =>{
          item.check = true
        })
      }else{
        this.$store.state.cartlist.forEach(item =>{
          item.check = false
        })
      }
      
    }
  },

}
</script>

<style scoped>
 .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>