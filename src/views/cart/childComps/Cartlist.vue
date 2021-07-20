<template>
  <div> 
    <CartlistItem v-for="(item,index) in cartitem" :citem="item" :key="index"></CartlistItem>
  </div>
</template>

<script>
import CartlistItem from './CartlistItem'
export default {
  computed:{
    cartitem(){
      return this.$store.state.cartlist
    }
  },
  components:{
    CartlistItem
  }

}
</script>

<style>

</style>