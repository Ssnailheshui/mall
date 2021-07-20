<template>
<div class="tabbaritem" @click="btnclick">
  <div v-if="!isactive"> <slot name="itemimg"></slot></div>
  <div v-else><slot name='itemimgact'></slot></div>
  <div :style="styleColor"><slot name="itemtext"></slot></div>
</div>
  
</template>

<script>
export default {
  
  props:{
    link:String,
    activecolor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isactive(){
      return  this.$route.path ===this.link
    },
    styleColor(){
      return this.isactive ? {color:this.activecolor}:{}
    }

  },
  
  methods: {
    btnclick(){
      this.$router.push(this.link)
    },  
  },
}
</script>

<style>
.tabbaritem{

  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbaritem img{
  margin-top: 3px;
  margin-bottom: 2px;
  /* 让图片和文字靠近 */
  vertical-align: middle;
  height: 24px;
  width: 24px;
}

</style>