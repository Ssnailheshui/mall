<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgload">
        </a>
      </swiper-item>
    </swiper>
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
    banner:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      isload:true
    }
  },
  methods: {
    imgload(){
      if(this.isload){
        this.$emit('iload')
        this.isload=false
      }
    },
     
  },

  

}
</script>

<style>
.a{
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>