<template>
  <div>
    <Swiper class='swiper1'>
      <SwiperItem v-for="(item,index) in banners" :key="index">
        <img :src="item" alt="" @load="imgload">

      </SwiperItem>

    </Swiper>

  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
 
   components:{
    Swiper, 
    SwiperItem
  },
  props:{
    banners:{
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
     imgload(){
      this.$bus.$emit('sload')
    },
  },
  

}
</script>

<style scoped>
.swiper1{
  height: 300px;
  overflow: hidden;
}
</style>