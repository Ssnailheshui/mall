<template>
<div>
  <navbar class="cart-nav">    
    <template v-slot:center >
      <div>
        购物车({{itemcount}})
      </div>
    </template>     
  </navbar>
  <scroll class="cont" :probe-type="3" :pull-up-load="true" ref="scroll">
    <Cartlist></Cartlist>
  </scroll>
  <CartBottomBar></CartBottomBar>
</div>
  
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import Cartlist from './childComps/Cartlist'
import scroll from 'components/common/Scroll/scroll.vue'
import CartBottomBar from 'views/cart/childComps/CartBottomBar.vue'
export default {
  components:{
    navbar,
    Cartlist,
    scroll,
     CartBottomBar
  },
  computed:{
    itemcount(){
      return this.$store.state.cartlist.length
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  },
 

}
</script>

<style scoped>
.cart-nav{
  background-color: var(--color-tint);
  color: white;
}
.cont{
  height: calc(100vh - 44px - 58px - 44px);
  overflow: hidden;
  
}
</style>